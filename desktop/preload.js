/* ============================================================
   预加载脚本 — 在渲染进程暴露最小安全 API
   ============================================================ */
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('companionHost', {
  // 窗口展开/收起通知主进程调整大小
  setExpanded: (expanded) => ipcRenderer.send('set-expanded', !!expanded),

  // 接收主进程推送的真实数据
  onLiveData:      (cb) => ipcRenderer.on('live-data',       (_e, d) => cb(d)),
  onLiveDataError: (cb) => ipcRenderer.on('live-data-error', (_e, m) => cb(m)),

  // 请求主进程立即重新拉一次数据
  requestRefresh: () => ipcRenderer.send('request-refresh'),

  // 通用写入: 调用 stp_sushi API，写完后主进程自动刷新数据
  // method: 'POST'|'PUT'|'PATCH'|'DELETE'
  // path:   '/api/sushi/inventory/:id' 等
  // body:   对象或 undefined（DELETE 时省略）
  apiWrite: (method, path, body) => ipcRenderer.invoke('api-write', { method, path, body }),
});
