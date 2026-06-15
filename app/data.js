/* ============================================================
   APP DATA — 订货特工「Guimarães」· 真实数据接入层
   数据源: stp_sushi  ·  http://115.29.195.37:3001
   HTTP 请求由 Electron 主进程发出(无 CORS)，数据通过 IPC 推来。
   ============================================================ */

/* —— 经理可调配置: par(订货点) / dailyUse(日均用量) / supplier(供应商) —— */
const _ITEM_CONFIG = {
  'Salmon Fillet':                                { par:90,  dailyUse:22,   supplier:'SALMON'    },
  'Chicken Diced Meat 12Kg':                      { par:4,   dailyUse:0.6,  supplier:'INGHAMS'   },
  'Spicy Teriyaki Sauce (Single Bottle)':         { par:6,   dailyUse:0.35, supplier:'STREAMLIN' },
  'Cucumber':                                     { par:6,   dailyUse:1.3,  supplier:'VEGE'      },
  'Fancy Lettuce':                                { par:6,   dailyUse:1.2,  supplier:'VEGE'      },
  'Capsicum':                                     { par:5,   dailyUse:1.1,  supplier:'VEGE'      },
  'Cp Copkl-17-10A (Snackbox) (900Pcs/Ctn)':     { par:8,   dailyUse:0.7,  supplier:'OFFICE'    },
  'Paper Towels Interfold - 9001':                { par:8,   dailyUse:0.5,  supplier:'CHEMICAL'  },
  'Cloth Roll Blue':                              { par:6,   dailyUse:0.4,  supplier:'CHEMICAL'  },
  'Mayonnaise QP 1 kg - 1010':                    { par:10,  dailyUse:0.7,  supplier:'STREAMLIN' },
  'Soya Sauce Sachet 10mL - Hello Kitty':         { par:10,  dailyUse:0.6,  supplier:'STREAMLIN' },
  'Teriyaki Sauce 18L':                           { par:12,  dailyUse:0.5,  supplier:'STREAMLIN' },
  'Ginger Pickled Prepared Shiro 1kg x 10':       { par:10,  dailyUse:0.8,  supplier:'STREAMLIN' },
  'Cp Copkl-19-12A (Regular 8Pcs) (800Pcs/Ctn)': { par:12,  dailyUse:1.0,  supplier:'OFFICE'    },
};

/* —— 供应商配置: 送货日(weekday 0=日…6=六) + 提前期 + 截单 + 配色 —— */
const _SUPPLIERS = {
  SALMON:    { name:'SALMON',    cat:'鲜鱼·三文鱼', days:[1,2,4],   lead:1, cutoff:'送货前一天 14:00', color:'#ef4444' },
  INGHAMS:   { name:'INGHAMS',   cat:'禽肉',        days:[1,2,6],   lead:1, cutoff:'送货前一天 12:00', color:'#f97316' },
  VEGE:      { name:'VEGE',      cat:'蔬菜',        days:[1,4],     lead:1, cutoff:'送货前一天 15:00', color:'#10b981' },
  FRESH:     { name:'FRESH',     cat:'蔬果',        days:[1,2,4,5], lead:1, cutoff:'送货前一天 15:00', color:'#6366f1' },
  CHEMICAL:  { name:'CHEMICAL',  cat:'清洁耗材',    days:[2],       lead:2, cutoff:'送货前两天',       color:'#8b5cf6' },
  STREAMLIN: { name:'STREAMLIN', cat:'调味·干货',   days:[2],       lead:2, cutoff:'送货前两天',       color:'#f59e0b' },
  FROZEN:    { name:'FROZEN',    cat:'冷冻',        days:[2],       lead:2, cutoff:'送货前两天',       color:'#3b82f6' },
  STOCKLINK: { name:'STOCKLINK', cat:'杂货',        days:[2],       lead:2, cutoff:'送货前两天',       color:'#2563eb' },
  OFFICE:    { name:'OFFICE',    cat:'包装·耗材',   days:[4],       lead:3, cutoff:'送货前三天',       color:'#d97706' },
  DAVIS:     { name:'DAVIS',     cat:'综合',        days:[3],       lead:2, cutoff:'送货前两天',       color:'#ec4899' },
};

/* —— 辅助 —— */
function _fmtUpdated(iso) {
  if (!iso) return '–';
  const d = new Date(iso);
  return `${String(d.getMonth()+1).padStart(2,'0')}/${String(d.getDate()).padStart(2,'0')} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
}
function _fmtTime(d) {
  return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
}

/* 通用库存品目标准化: drinks / vege / frozen / packaging 结构完全相同 */
function _normSimple(rawArr) {
  return (Array.isArray(rawArr) ? rawArr : []).map(d => ({
    id:           d.id,
    name:         d.name || '未知',
    qty:          typeof d.quantity === 'number' ? d.quantity : parseFloat(d.quantity) || 0,
    unit:         d.unit || '',
    lowThreshold: typeof d.lowThreshold === 'number' ? d.lowThreshold : parseFloat(d.lowThreshold) || 0,
    notes:        d.notes || '',
    updated:      _fmtUpdated(d.updatedAt),
  }));
}

/* 本地日期字符串 YYYY-MM-DD，避免 toISOString() 的 UTC 时区偏移 */
function _localDateStr(d) {
  const t = d || new Date();
  return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}`;
}

/* 与 stp_sushi oss-sync.ts 里 parseDeliveryDate 完全一致的客户端版本
   处理: YYYY-MM-DD / DD/MM/YYYY / DD-Mon-YY / DD-Mon-YYYY 等 OSS 格式 */
const _MONTH_ABBR = {jan:'01',feb:'02',mar:'03',apr:'04',may:'05',jun:'06',
                     jul:'07',aug:'08',sep:'09',oct:'10',nov:'11',dec:'12'};
function _parseDelivDate(s) {
  if (!s) return null;
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10);
  const dmy = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (dmy) return `${dmy[3]}-${dmy[2].padStart(2,'0')}-${dmy[1].padStart(2,'0')}`;
  const dm = s.match(/^(\d{1,2})-([A-Za-z]{3})-(\d{2,4})/);
  if (dm) {
    const m = _MONTH_ABBR[dm[2].toLowerCase()];
    const y = dm[3].length === 2 ? `20${dm[3]}` : dm[3];
    if (m) return `${y}-${m}-${dm[1].padStart(2,'0')}`;
  }
  const d = new Date(s);
  return isNaN(d.getTime()) ? null : _localDateStr(d);
}

/* —— 等级系统 ——
   XP 每次同步获得，连续值守 + 库存健康都有加成
   共 30 级，EVO 0-7，每级都有新视觉变化                    */
const _LV_XP = [
     0,  100,  250,  450,  700,   // Lv  1-5
  1000, 1400, 1850, 2350, 2900,   // Lv  6-10
  3500, 4150, 4850, 5600, 6400,   // Lv 11-15
  7250, 8150, 9100,10100,11150,   // Lv 16-20
 12250,13400,14600,15850,17150,   // Lv 21-25
 18500,19900,21350,22850,24400,   // Lv 26-30
];
const _LV_STAGES = [
  '采购新人','见习采购','采购助理','初级采购员','采购员',
  '资深采购员','采购专员','高级专员','采购主管','资深主管',
  '采购经理','资深经理','采购参谋','高级参谋','采购顾问',
  '资深顾问','首席顾问','采购总监','资深总监','执行总监',
  '采购大师','高级大师','采购宗师','资深宗师','传奇采购',
  '采购王者','采购霸主','采购传说','采购神话','订货特工 MAX',
];
const _LV_EVO = [
  0, 0, 1, 1, 1,   // Lv  1-5
  2, 2, 2, 2, 3,   // Lv  6-10
  3, 3, 3, 4, 4,   // Lv 11-15
  4, 4, 5, 5, 5,   // Lv 16-20
  5, 6, 6, 6, 6,   // Lv 21-25
  7, 7, 7, 7, 7,   // Lv 26-30
];

function _levelInfo(xp) {
  let i = _LV_XP.length - 1;
  while (i > 0 && xp < _LV_XP[i]) i--;
  const xpMin = _LV_XP[i];
  const xpMax = i + 1 < _LV_XP.length ? _LV_XP[i + 1] : xpMin + 1000;
  return { level: i + 1, stage: _LV_STAGES[i], evo: `EVO ${_LV_EVO[i]}`, evoNum: _LV_EVO[i], xp, xpMax };
}

/* 计算动态活力指标，并把游戏状态持久化到 localStorage */
function _calculateVitals(inventory, reorder) {
  const now      = new Date();
  const todayYmd = _localDateStr(now);
  const yestYmd  = _localDateStr(new Date(now - 86400000));

  let gs = {};
  try { gs = JSON.parse(localStorage.getItem('guimaraes_gs') || '{}'); } catch {}

  // 连续值守: 连续天数统计
  let streak = gs.streak || 0;
  if (!gs.lastSyncDate)             streak = 1;
  else if (gs.lastSyncDate === todayYmd) { /* 今天已计 */ }
  else if (gs.lastSyncDate === yestYmd)  streak += 1;
  else                                   streak = 1;  // 中断归 1

  // 今日巡检次数
  const checksToday = gs.lastChecksDate === todayYmd ? (gs.checksToday || 0) + 1 : 1;

  // 心情: 库存健康度 (高于订货点的品目 %)
  const cfgItems = inventory.filter(it => it.par > 0);
  const mood = cfgItems.length
    ? Math.round(cfgItems.filter(it => it.qty >= it.par).length / cfgItems.length * 100)
    : 80;

  // 精力: 订货压力的反向 (紧急品目越多越低)
  const high   = reorder ? reorder.needRows.filter(r => r.urgency === 'high').length : 0;
  const mid    = reorder ? reorder.needRows.filter(r => r.urgency === 'mid').length : 0;
  const energy = Math.max(8, 100 - high * 18 - mid * 8);

  // XP: 每次同步获得
  // 基础 5 + 连续值守加成(最多+10) + 心情加成(最多+5)
  const xpGain = 5 + Math.min(streak, 10) + Math.floor(mood / 20);
  const prevXp = typeof gs.xp === 'number' ? gs.xp : 0;
  const prevLv = _levelInfo(prevXp).level;
  const xp     = prevXp + xpGain;
  const lvInfo = _levelInfo(xp);
  const leveledUp = lvInfo.level > prevLv;

  try {
    localStorage.setItem('guimaraes_gs', JSON.stringify({
      xp, streak, checksToday,
      lastSyncDate: todayYmd, lastChecksDate: todayYmd,
    }));
  } catch {}

  return { ...lvInfo, energy, mood, focus: 100, streak, checksToday, xpGain, leveledUp };
}

/* 把 OSS 全名模糊匹配到 _SUPPLIERS 键；匹配不上就原样保留 */
function _matchSupplier(name) {
  if (!name) return name;
  const up = name.toUpperCase().replace(/[^A-Z0-9]/g, '');
  for (const key of Object.keys(_SUPPLIERS)) {
    const k = key.replace(/[^A-Z0-9]/g, '');
    if (up.includes(k) || k.includes(up.slice(0, 4))) return key;
  }
  return name;
}

/* —— 从订单列表构建本周配送日历 —— */
function _buildCalendar(orders) {
  const today = new Date(); today.setHours(0,0,0,0);
  const dow = today.getDay();
  const monday = new Date(today);
  monday.setDate(today.getDate() + (dow === 0 ? -6 : 1 - dow));

  const WD = ['日','一','二','三','四','五','六'];
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday); d.setDate(monday.getDate() + i); d.setHours(0,0,0,0);
    const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1);
    days.push({ wd:d.getDay(), date:String(d.getDate()), label:WD[d.getDay()],
      today: d.getTime()===today.getTime(), tomorrow: d.getTime()===tomorrow.getTime(),
      _ts: d.getTime(), ship:[] });
  }

  const seen = new Set();
  for (const order of orders) {
    if (!order.deliveryDate || order.status < 1) continue;
    const ymd = _parseDelivDate(order.deliveryDate);
    if (!ymd) continue;
    // 用 T00:00:00（本地时间）避免 UTC 解析的时区偏移
    const ts = new Date(ymd + 'T00:00:00').getTime();
    for (const day of days) {
      if (day._ts === ts) {
        const matched = _matchSupplier(order.supplierName);
        if (!_SUPPLIERS[matched]) continue;  // 过滤未配置供应商，不在日历显示
        const key = `${ts}_${matched}`;
        if (!seen.has(key)) { seen.add(key); day.ship.push(matched); }
        break;
      }
    }
  }

  const sun = new Date(monday); sun.setDate(monday.getDate()+6);
  return {
    range: `本周 · ${monday.getMonth()+1}/${monday.getDate()} – ${sun.getMonth()+1}/${sun.getDate()}`,
    days,
  };
}

/* —— 初始状态(API 连接前显示) —— */
window.APP_DATA = {
  monitor: {
    site:'sushi/orders', host:'115.29.195.37:3001', source:"St Pierre's OSS 系统",
    status:'loading', lastSync:'--:--', pollEvery:'30 分钟',
    arrivingToday:0, notArrived:0,
  },
  context: { todayWd: new Date().getDay(), todayLabel:'连接中…' },
  suppliers: _SUPPLIERS,
  inventory: Object.entries(_ITEM_CONFIG).map(([name,cfg])=>({ name, qty:0, unit:'–', updated:'–', ...cfg })),
  drinks: [], vege: [], frozen: [], packaging: [],
  calendar: { range:'加载中…', days:[] },
  vitals: { level:7, stage:'采购参谋', evo:'EVO 2', xp:1840, xpMax:2400, energy:82, mood:74, focus:91, streak:12, checksToday:18 },
  log: { lines:[{ t:'--:--', msg:'正在连接服务器…' }], now:'连接中…', elapsed:'00:00:00' },
};

/* —— 核心: 把主进程推来的原始 API 数据合并进 window.APP_DATA —— */
window._applyLiveData = function({ inventory: invItems, orders, drinks: rawDrinks, vege: rawVege, frozen: rawFrozen, packaging: rawPackaging, fetchedAt }) {
  // 库存: 用 API 数量 + 本地 par/dailyUse/supplier 配置
  const inventory = invItems.map(item => {
    const cfg = _ITEM_CONFIG[item.name] || { par:0, dailyUse:0, supplier:'FRESH' };
    return {
      id:   item.id,
      name: item.name,
      qty:  typeof item.quantity === 'number' ? item.quantity : parseFloat(item.quantity) || 0,
      unit: item.unit || '–',
      updated: _fmtUpdated(item.updatedAt),
      ...cfg,
    };
  });
  // 补上配置里有但 API 没返回的品目
  for (const [name, cfg] of Object.entries(_ITEM_CONFIG)) {
    if (!inventory.find(it => it.name === name))
      inventory.push({ name, qty:0, unit:'–', updated:'–', ...cfg });
  }

  const calendar = _buildCalendar(orders);

  // 扩展库存: 饮品 / 蔬菜 / 冷冻 / 包装盒（结构相同，含 lowThreshold 告警阈值）
  const drinks    = _normSimple(rawDrinks);
  const vege      = _normSimple(rawVege);
  const frozen    = _normSimple(rawFrozen);
  const packaging = _normSimple(rawPackaging);

  // 用当前库存驱动订货引擎，再用结果计算活力指标
  const _tmpData = { ...window.APP_DATA, inventory, suppliers: _SUPPLIERS, context: { todayWd: new Date().getDay() } };
  const _reorder = window.REORDER ? window.REORDER.compute(_tmpData) : null;
  const vitals   = _calculateVitals(inventory, _reorder);

  const todayStr = _localDateStr(new Date());
  const arrivingToday = orders.filter(o => _parseDelivDate(o.deliveryDate) === todayStr && o.status >= 2).length;
  const notArrived    = orders.filter(o => o.status===1).length;

  const now = new Date(fetchedAt || Date.now());
  const todayWd = now.getDay();
  const WD = '日一二三四五六';

  window.APP_DATA = {
    monitor: {
      site:'sushi/orders', host:'115.29.195.37:3001', source:"St Pierre's OSS 系统",
      status:'connected', lastSync:_fmtTime(now), pollEvery:'30 分钟',
      arrivingToday, notArrived,
    },
    context: { todayWd, todayLabel:`周${WD[todayWd]} · ${now.getMonth()+1}/${now.getDate()}` },
    suppliers: _SUPPLIERS,
    inventory,
    drinks, vege, frozen, packaging,
    calendar,
    vitals,
    log: {
      lines: [
        { t:_fmtTime(now), msg:`已同步 St Pierre's OSS · 库存 ${inventory.length} 项` },
        { t:_fmtTime(now), msg:`今日到货 ${arrivingToday} · 待下单 ${notArrived}` },
        { t:_fmtTime(now), msg:'按订货点扫描库存…' },
      ],
      now:'监测 sushi/orders 中…', elapsed:'00:00:00',
    },
  };

  window.dispatchEvent(new CustomEvent('app-data-updated'));
};

/* ============================================================
   用量学习 — 记录每次加减操作，估算日均消耗和剩余天数
   数据存 localStorage 'guimaraes_usage'，保留最近 30 天
   ============================================================ */
(function(){
  const KEY    = 'guimaraes_usage';
  const MAX_MS = 30 * 86400000;

  /* 记录一次调整: dataKey='drinks'|'vege'|'frozen'|'packaging', delta 正负均记 */
  window._logUsage = function(dataKey, itemId, itemName, delta) {
    if (!itemId || delta === 0) return;
    let log = {};
    try { log = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch {}
    const k = `${dataKey}:${itemId}`;
    if (!log[k]) log[k] = { name: itemName, entries: [] };
    log[k].name = itemName;
    const now = Date.now();
    log[k].entries.push({ ts: now, d: delta });
    // 裁剪超过 30 天的旧记录
    const cutoff = now - MAX_MS;
    log[k].entries = log[k].entries.filter(e => e.ts >= cutoff);
    try { localStorage.setItem(KEY, JSON.stringify(log)); } catch {}
  };

  /* 根据历史消耗记录，估算当前库存还能用多少天；数据不足返回 null */
  window._daysLeft = function(dataKey, itemId, currentQty) {
    if (!itemId || currentQty == null) return null;
    let log = {};
    try { log = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch {}
    const rec = log[`${dataKey}:${itemId}`];
    if (!rec || !rec.entries) return null;
    // 只统计减少（实际消耗）的操作
    const cons = rec.entries.filter(e => e.d < 0);
    if (cons.length === 0) return null;
    const oldest  = Math.min(...cons.map(e => e.ts));
    const daySpan = (Date.now() - oldest) / 86400000;
    if (daySpan < 1) return null;   // 跨度不足 1 天，数据太少
    const dailyUse = cons.reduce((s, e) => s + Math.abs(e.d), 0) / daySpan;
    if (dailyUse <= 0) return null;
    return Math.round(currentQty / dailyUse);
  };
})();
