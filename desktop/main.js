/* ============================================================
   订货特工 Guimarães — Electron 主进程
   一个透明、无边框、永远置顶、停在桌面右下角的悬浮挂件窗。
   收起时只显示像素小人；点击展开订货面板时窗口自动放大。
   ============================================================ */
const { app, BrowserWindow, ipcMain, screen, Menu, Tray, nativeImage } = require('electron');
const path = require('path');

// 收起 / 展开 两档窗口尺寸
const COLLAPSED = { width: 340, height: 360 };
const EXPANDED  = { width: 412, height: 700 };
const MARGIN = 8;   // 距屏幕边缘

let win  = null;
let tray = null;

/* 始终把窗口锚定在主显示器工作区的右下角 */
function anchorBottomRight(size) {
  const { workArea } = screen.getPrimaryDisplay();
  return {
    x: Math.round(workArea.x + workArea.width  - size.width  - MARGIN),
    y: Math.round(workArea.y + workArea.height - size.height - MARGIN),
    width: size.width,
    height: size.height,
  };
}

/* ============================================================
   真实数据拉取 — Node.js fetch，无 CORS 限制
   手动维护 auth_token cookie，拉到数据后推给渲染进程
   ============================================================ */
const API_BASE  = 'http://115.29.195.37:3001';
const API_CREDS = { username: 'root', password: 'root' };
let _cookie = '';   // 内存中保存 auth_token=xxx
let _pollTimer = null;

async function apiFetch(urlPath, opts = {}) {
  const headers = { 'Content-Type': 'application/json', ...(opts.headers || {}) };
  if (_cookie) headers['Cookie'] = _cookie;
  const resp = await fetch(`${API_BASE}${urlPath}`, { ...opts, headers });
  // 从 Set-Cookie 里提取并保存新 token
  const sc = resp.headers.get('set-cookie') || '';
  const m  = sc.match(/auth_token=([^;]+)/);
  if (m) _cookie = `auth_token=${m[1]}`;
  return resp;
}

async function ensureLogin() {
  const me = await apiFetch('/api/auth/me');
  if (me.ok) return;
  const lr = await apiFetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(API_CREDS),
  });
  if (!lr.ok) throw new Error(`login ${lr.status}`);
}

async function fetchAndPush() {
  try {
    await ensureLogin();
    const [invResp, ordResp] = await Promise.all([
      apiFetch('/api/sushi/inventory'),
      apiFetch('/api/sushi/orders'),
    ]);
    if (!invResp.ok) throw new Error(`inventory ${invResp.status}`);
    if (!ordResp.ok) throw new Error(`orders ${ordResp.status}`);

    // 扩展库存接口: 优雅降级为空数组
    let drinks = [], vege = [], frozen = [], packaging = [];
    try { const r = await apiFetch('/api/sushi/drinks');    if (r.ok) drinks    = await r.json(); } catch {}
    try { const r = await apiFetch('/api/sushi/vege');      if (r.ok) vege      = await r.json(); } catch {}
    try { const r = await apiFetch('/api/sushi/frozen');    if (r.ok) frozen    = await r.json(); } catch {}
    try { const r = await apiFetch('/api/sushi/packaging'); if (r.ok) packaging = await r.json(); } catch {}

    const payload = {
      inventory: await invResp.json(),
      orders:    await ordResp.json(),
      drinks, vege, frozen, packaging,
      fetchedAt: new Date().toISOString(),
    };
    if (win && !win.isDestroyed()) win.webContents.send('live-data', payload);
  } catch (e) {
    console.error('[main fetch]', e.message);
    if (win && !win.isDestroyed()) win.webContents.send('live-data-error', e.message);
  }
}

function createWindow() {
  win = new BrowserWindow({
    ...anchorBottomRight(COLLAPSED),
    frame: false,
    transparent: true,
    backgroundColor: '#00000000',
    resizable: false,
    movable: true,
    alwaysOnTop: true,
    skipTaskbar: true,
    hasShadow: false,
    fullscreenable: false,
    maximizable: false,
    minimizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // 浮在所有窗口(含全屏应用)之上
  win.setAlwaysOnTop(true, 'screen-saver');
  win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });

  // 加载源文件版 index.html，?app=1 启用透明悬浮挂件模式
  win.loadFile(path.join(__dirname, '..', 'index.html'), { search: 'app=1' });

  // 页面加载完成后立即拉一次数据，然后每 30 分钟轮询
  win.webContents.once('did-finish-load', () => {
    setTimeout(fetchAndPush, 800);
    _pollTimer = setInterval(fetchAndPush, 30 * 60 * 1000);
  });

  // 调试时打开: win.webContents.openDevTools({ mode: 'detach' });
}

/* 渲染进程通知: 展开/收起 -> 调整窗口大小(保持右下角锚定) */
ipcMain.on('set-expanded', (_e, expanded) => {
  if (!win) return;
  win.setBounds(anchorBottomRight(expanded ? EXPANDED : COLLAPSED), true);
});

/* 渲染进程请求手动刷新数据 */
ipcMain.on('request-refresh', () => fetchAndPush());

/* 通用写入: 转发到 stp_sushi API，完成后触发数据刷新 */
ipcMain.handle('api-write', async (_e, { method, path, body }) => {
  await ensureLogin();
  const opts = { method };
  if (body !== undefined) opts.body = JSON.stringify(body);
  const resp = await apiFetch(path, opts);
  if (!resp.ok) {
    const text = await resp.text().catch(() => '');
    throw new Error(`${method} ${path} → ${resp.status} ${text}`);
  }
  let result = null;
  try { result = await resp.json(); } catch {}
  // 写完立即刷新数据推给渲染进程
  fetchAndPush().catch(e => console.error('[post-write refresh]', e));
  return result;
});

/* 托盘菜单: 显示/隐藏 · 退出 */
function createTray() {
  const icon = nativeImage.createFromDataURL(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
  );
  tray = new Tray(icon);
  tray.setToolTip('订货特工 Guimarães');
  tray.setContextMenu(Menu.buildFromTemplate([
    { label: '显示 / 隐藏', click: () => (win.isVisible() ? win.hide() : win.show()) },
    { type: 'separator' },
    { label: '退出', click: () => app.quit() },
  ]));
  tray.on('click', () => (win.isVisible() ? win.hide() : win.show()));
}

app.whenReady().then(() => {
  createWindow();
  try { createTray(); } catch (e) { /* 托盘不可用时忽略 */ }
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});

app.on('window-all-closed', () => {
  if (_pollTimer) clearInterval(_pollTimer);
  if (process.platform !== 'darwin') app.quit();
});
