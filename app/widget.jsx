/* ============================================================
   COMPANION WIDGET — 桌面右下角的陪伴特工
   折叠态: 小人站在基座上飘动/眨眼；有新订货提示时冒气泡+弹跳
   展开态: 头部 + 物流站点监测条 + TabBar + 面板内容
   交互: 点击小人展开/收起；按住小人可拖到任意角落(吸附)
   ============================================================ */
const WNS = window.GuimarEsPixelDesignSystem_2bf0cf;
const { PixelSprite, Badge, IconButton, TabBar, Icon, Button } = WNS;

const WIDGET_CSS = `
/* === DOCK === */
.dock{ position:absolute; display:flex; flex-direction:column; gap:14px; z-index:50; user-select:none; touch-action:none; }

/* === PUCK (折叠态基座) === */
.puck{ position:relative; display:flex; flex-direction:column; align-items:center; gap:6px; cursor:grab; }
.puck:active{ cursor:grabbing; }
.puck__base{ width:62px; height:14px; margin-top:-10px;
  background:radial-gradient(ellipse at center, rgba(84,230,160,.18) 0%, rgba(84,230,160,0) 70%); }
.puck__pill{ font-family:var(--type-readout); font-size:13px; letter-spacing:.04em;
  color:var(--text-tertiary); display:flex; align-items:center; gap:5px;
  padding:2px 8px; background:var(--surface); border:2px solid var(--border);
  box-shadow:var(--shadow-1); white-space:nowrap; }
.puck__pill b{ color:var(--accent); font-weight:400; }
.puck__pill .pdot{ width:6px; height:6px; background:var(--green); box-shadow:0 0 6px var(--green); }
.puck__pill .pdot--warn{ background:var(--amber); box-shadow:0 0 6px var(--amber); animation:pk-blink 1s steps(1,end) infinite; }
@keyframes pk-blink{ 0%,60%{opacity:1} 61%,100%{opacity:.25} }

/* alert 弹跳 */
.puck--alert .puck__sprite{ animation:pk-hop .9s var(--ease-out) infinite; }
@keyframes pk-hop{ 0%,100%{transform:translateY(0)} 30%{transform:translateY(-9px)} 45%{transform:translateY(0)} 60%{transform:translateY(-4px)} 75%{transform:translateY(0)} }
@media (prefers-reduced-motion:reduce){ .puck--alert .puck__sprite{ animation:none; } }

/* === 气泡 === */
.bubble{ position:absolute; bottom:100%; margin-bottom:10px; right:0;
  width:236px; padding:9px 12px; background:var(--surface-raised);
  border:2px solid var(--accent); box-shadow:var(--shadow-2);
  font-family:var(--type-ui); font-size:13px; line-height:1.5; color:var(--text-primary); white-space:normal; }
.dock[data-h="left"] .bubble{ right:auto; left:0; }
.dock[data-v="top"] .bubble{ bottom:auto; top:100%; margin-bottom:0; margin-top:12px; }
.bubble b{ color:var(--accent); }
.bubble__tail{ position:absolute; top:100%; right:24px; width:10px; height:10px;
  background:var(--surface-raised); border-right:2px solid var(--accent); border-bottom:2px solid var(--accent);
  transform:translateY(-6px) rotate(45deg); }
.dock[data-h="left"] .bubble__tail{ right:auto; left:24px; }
.dock[data-v="top"] .bubble__tail{ top:auto; bottom:100%; transform:translateY(6px) rotate(225deg); }
.bubble__close{ position:absolute; top:-9px; right:-9px; width:20px; height:20px;
  display:flex; align-items:center; justify-content:center; cursor:pointer;
  background:var(--surface); border:2px solid var(--border-strong); color:var(--text-tertiary);
  font-family:var(--type-ui); font-size:11px; }
.bubble__close:hover{ color:var(--text-primary); border-color:var(--accent); }

/* === EVO 装饰容器 === */
.evo-wrap{ position:relative; display:inline-flex; align-items:center; justify-content:center; }

/* === 精灵颜色滤镜 — 随等级变色 === */
.spr-glow  { filter:brightness(1.1) drop-shadow(0 0 4px var(--accent)); }
.spr-cyan  { filter:hue-rotate(-18deg) brightness(1.15) saturate(1.3) drop-shadow(0 0 6px #3be0ff); }
.spr-blue  { filter:hue-rotate(-50deg) brightness(1.2) saturate(1.4) drop-shadow(0 0 8px #00c4ff); }
.spr-purple{ filter:hue-rotate(58deg) brightness(1.2) saturate(1.5) drop-shadow(0 0 10px #b98cff); }
.spr-gold  { filter:sepia(.35) saturate(2.5) brightness(1.4) hue-rotate(12deg) drop-shadow(0 0 12px #ffcb47); }
.spr-max   { animation:spr-rainbow 3s linear infinite; }
@keyframes spr-rainbow{
  0%  {filter:hue-rotate(0deg)   brightness(1.4) saturate(1.8) drop-shadow(0 0 12px #54e6a0)}
  33% {filter:hue-rotate(120deg) brightness(1.4) saturate(1.8) drop-shadow(0 0 12px #5cd2ff)}
  66% {filter:hue-rotate(240deg) brightness(1.4) saturate(1.8) drop-shadow(0 0 12px #b98cff)}
  100%{filter:hue-rotate(360deg) brightness(1.4) saturate(1.8) drop-shadow(0 0 12px #54e6a0)}
}

/* === 轨道环 — 三层同心圆 === */
.puck__orbit,.puck__orbit2,.puck__orbit3{
  position:absolute; border-radius:50%;
  top:50%; left:50%; pointer-events:none; }

/* 外环 84px (lv 4+) */
.puck__orbit{
  width:84px; height:84px;
  transform:translate(-50%,-56%);
  border:1px dashed color-mix(in oklab,var(--accent) 55%,transparent);
  animation:evo-spin 7s linear infinite; }
.puck__orbit--faint{ opacity:.4; }
.puck__orbit--rbw{ border-style:solid; animation:evo-spin 7s linear infinite,orbit-rbw 3s linear infinite; }
@keyframes orbit-rbw{ to{filter:hue-rotate(360deg) brightness(1.5)} }

/* 内环 66px 蓝色反转 (lv 10+) */
.puck__orbit2{
  width:66px; height:66px;
  transform:translate(-50%,-56%);
  border:1px dashed color-mix(in oklab,#5cd2ff 50%,transparent);
  animation:evo-spin 4s linear infinite reverse; }

/* 外扩环 108px 紫色 (lv 14+) */
.puck__orbit3{
  width:108px; height:108px;
  transform:translate(-50%,-56%);
  border:1px dashed color-mix(in oklab,#b98cff 38%,transparent);
  animation:evo-spin 11s linear infinite; }

@keyframes evo-spin{ to{transform:translate(-50%,-56%) rotate(360deg)} }

/* === 轨道小球 — 绕环旋转的光点 === */
/* dot-track: 0×0 容器定位在轨道中心，旋转时带动光点描圆 */
.dot-track{
  position:absolute;
  top:calc(50% - 5px); left:50%;
  width:0; height:0;
  transform-origin:0 0;
  animation:dot-spin var(--s,3s) linear infinite;
  animation-delay:var(--d,0s);
  pointer-events:none; }
.dot-track::after{
  content:'';
  position:absolute;
  width:5px; height:5px;
  border-radius:50%;
  background:var(--dc,var(--accent));
  box-shadow:0 0 5px var(--dc,var(--accent));
  margin:-2.5px;
  transform:translateX(var(--r,42px)); }
@keyframes dot-spin{ to{transform:rotate(360deg)} }

/* === 顶冠 === */
.puck__crown{
  position:absolute; top:-24px; left:50%; transform:translateX(-50%);
  font-size:13px; line-height:1; z-index:2; pointer-events:none;
  filter:drop-shadow(0 0 5px var(--accent)) drop-shadow(0 0 3px #ffcb47);
  animation:crown-float 1.8s ease-in-out infinite; }
.puck__crown--max{ font-size:16px; animation:crown-float 1.8s ease-in-out infinite,crown-rbw 2s linear infinite; }
@keyframes crown-float{ 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-4px)} }
@keyframes crown-rbw{ to{filter:hue-rotate(360deg) brightness(1.6) drop-shadow(0 0 8px #fff)} }

/* === 头顶光环 === */
.puck__halo{
  position:absolute; top:-5px; left:50%; transform:translateX(-50%);
  width:34px; height:8px;
  border:2px solid color-mix(in oklab,var(--accent) 72%,transparent);
  border-radius:50%;
  box-shadow:0 0 6px var(--accent);
  animation:halo-glow 2s ease-in-out infinite;
  pointer-events:none; z-index:3; }
.puck__halo--big{ width:44px; height:11px; top:-8px; box-shadow:0 0 10px var(--accent),inset 0 0 4px rgba(255,255,255,.2); }
@keyframes halo-glow{ 0%,100%{opacity:.6} 50%{opacity:1} }

/* === 漂浮小星 === */
.puck__star{
  position:absolute; line-height:1; pointer-events:none; z-index:2;
  color:var(--accent); font-size:8px;
  filter:drop-shadow(0 0 3px var(--accent));
  animation:star-twinkle var(--st,2s) ease-in-out infinite;
  animation-delay:var(--sd,0s); }
@keyframes star-twinkle{ 0%,100%{opacity:.7;transform:scale(1) translateY(0)} 50%{opacity:1;transform:scale(1.3) translateY(-3px)} }
.puck__star--1{ top:6px;  right:-11px; --st:2.1s; }
.puck__star--2{ top:36px; right:-13px; --st:1.8s; --sd:.4s; }
.puck__star--3{ top:36px; left:-13px;  --st:2.3s; --sd:.2s; }
.puck__star--4{ top:6px;  left:-11px;  --st:1.9s; --sd:.6s; }
.puck__star--5{ top:-6px; right:1px;   font-size:6px; --st:2.0s; --sd:.3s; }
.puck__star--6{ top:-6px; left:1px;    font-size:6px; --st:2.2s; --sd:.5s; }
.puck__star--7{ top:21px; right:-6px;  font-size:5px; --st:1.7s; --sd:.1s; }
.puck__star--8{ top:21px; left:-6px;   font-size:5px; --st:1.9s; --sd:.7s; }

/* === 翅膀 === */
.puck__wing{
  position:absolute; top:28%; width:20px; height:32px;
  background:linear-gradient(135deg,color-mix(in oklab,var(--accent) 60%,transparent) 0%,transparent 80%);
  animation:wing-flap 1.4s ease-in-out infinite;
  pointer-events:none; z-index:0; opacity:.72; }
.puck__wing--l{ right:calc(100% - 4px); clip-path:polygon(100% 0%,0% 35%,100% 100%); transform-origin:right center; }
.puck__wing--r{ left:calc(100% - 4px);  clip-path:polygon(0% 0%,100% 35%,0% 100%);  transform-origin:left center; }
@keyframes wing-flap{ 0%,100%{transform:scaleX(1)} 50%{transform:scaleX(.6)} }

/* === 光晕背景 (lv 21+) === */
.puck__aura{
  position:absolute; width:100px; height:100px;
  top:50%; left:50%; transform:translate(-50%,-56%);
  border-radius:50%;
  background:radial-gradient(circle,color-mix(in oklab,var(--accent) 22%,transparent) 0%,transparent 68%);
  animation:aura-pulse 2.2s ease-in-out infinite;
  pointer-events:none; z-index:-1; }
@keyframes aura-pulse{ 0%,100%{transform:translate(-50%,-56%) scale(1);opacity:.7} 50%{transform:translate(-50%,-56%) scale(1.25);opacity:1} }

/* === 六芒射线 (lv 23+) === */
.puck__rays{
  position:absolute; width:120px; height:120px;
  top:50%; left:50%; transform:translate(-50%,-56%);
  border-radius:50%;
  background:conic-gradient(from 0deg,
    color-mix(in oklab,var(--accent) 18%,transparent) 0deg 9deg,transparent 9deg 60deg,
    color-mix(in oklab,var(--accent) 18%,transparent) 60deg 69deg,transparent 69deg 120deg,
    color-mix(in oklab,var(--accent) 18%,transparent) 120deg 129deg,transparent 129deg 180deg,
    color-mix(in oklab,var(--accent) 18%,transparent) 180deg 189deg,transparent 189deg 240deg,
    color-mix(in oklab,var(--accent) 18%,transparent) 240deg 249deg,transparent 249deg 300deg,
    color-mix(in oklab,var(--accent) 18%,transparent) 300deg 309deg,transparent 309deg 360deg);
  animation:rays-spin 8s linear infinite;
  pointer-events:none; z-index:-1; opacity:.65; }
@keyframes rays-spin{ to{transform:translate(-50%,-56%) rotate(360deg)} }

/* === 星系螺旋 (lv 29+) === */
.puck__galaxy{
  position:absolute; width:140px; height:140px;
  top:50%; left:50%; transform:translate(-50%,-56%);
  border-radius:50%;
  background:conic-gradient(from 0deg,
    transparent 0deg 70deg,
    color-mix(in oklab,var(--accent) 10%,transparent) 70deg 180deg,
    transparent 180deg 250deg,
    color-mix(in oklab,#5cd2ff 10%,transparent) 250deg 360deg);
  animation:galaxy-spin 18s linear infinite;
  pointer-events:none; z-index:-2; opacity:.8; }
@keyframes galaxy-spin{ to{transform:translate(-50%,-56%) rotate(360deg)} }

/* === 彩虹光轮 (lv 22+) === */
.puck__legend{
  position:absolute; inset:-6px; border-radius:2px; pointer-events:none;
  background:conic-gradient(var(--accent),#5cd2ff,#b98cff,#ffcb47,var(--accent));
  opacity:.22; animation:legend-spin 3s linear infinite; z-index:0; }
.puck__legend--max{ opacity:.38; inset:-10px; }
@keyframes legend-spin{ to{transform:rotate(360deg)} }

/* === 展开态面板 === */
.wx{ width:362px; display:flex; flex-direction:column; max-height:calc(100vh - 48px);
  background:var(--surface); border:2px solid var(--border-strong); box-shadow:var(--shadow-3); }
.wx__hd{ display:flex; align-items:center; gap:10px; padding:10px 10px 10px 12px;
  background:color-mix(in oklab, var(--accent) 9%, var(--surface-raised));
  border-bottom:2px solid var(--border); cursor:grab; }
.wx__hd:active{ cursor:grabbing; }
.wx__id{ flex:1; min-width:0; display:flex; flex-direction:column; gap:1px; }
.wx__name{ font-family:var(--type-ui); font-size:14px; color:var(--text-primary); display:flex; align-items:center; gap:7px; }
.wx__name .codon{ font-family:var(--type-display); font-size:8px; letter-spacing:.12em;
  color:var(--accent); padding:2px 4px; background:color-mix(in oklab,var(--accent) 16%,transparent);
  border:1px solid color-mix(in oklab,var(--accent) 40%,transparent); }
.wx__sub{ font-family:var(--type-ui); font-size:11px; color:var(--text-tertiary); }

/* 监测条 */
.mon{ display:flex; flex-direction:column; gap:5px; padding:8px 12px;
  background:var(--surface-inset); border-bottom:2px solid var(--border);
  font-family:var(--type-readout); letter-spacing:.02em; }
.mon__row{ display:flex; align-items:center; gap:8px; }
.mon__dot{ width:8px; height:8px; flex:0 0 auto; background:var(--green); box-shadow:0 0 7px var(--green);
  animation:pk-blink 1.4s steps(1,end) infinite; }
.mon--checking .mon__dot{ background:var(--amber); box-shadow:0 0 7px var(--amber); animation:pk-blink .5s steps(1,end) infinite; }
.mon__site{ font-size:15px; color:var(--text-secondary); flex:1; }
.mon__site b{ color:var(--accent); font-weight:400; }
.mon--checking .mon__site b{ color:var(--amber); }
.mon__stat{ font-size:13px; color:var(--green); white-space:nowrap; }
.mon--checking .mon__stat{ color:var(--amber); }
.mon__host{ font-size:13px; color:var(--text-quaternary); flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.mon__sync{ font-size:13px; color:var(--text-quaternary); white-space:nowrap; }
.mon__btn{ flex:0 0 auto; margin:-4px -4px -4px 0; }

.wx__tabs{ padding:8px 8px 0; }
.wx__body{ padding:12px; flex:1; min-height:0; overflow-y:auto; }
.wx__hd, .mon, .wx__tabs{ flex:0 0 auto; }
.wx__body::-webkit-scrollbar{ width:9px; }
.wx__body::-webkit-scrollbar-track{ background:var(--surface-inset); }
.wx__body::-webkit-scrollbar-thumb{ background:var(--border-strong); border:2px solid var(--surface-inset); }
`;
(function ensure(){
  if (document.getElementById('widget-css')) return;
  const s=document.createElement('style'); s.id='widget-css'; s.textContent=WIDGET_CSS; document.head.appendChild(s);
})();

/* 根据等级返回精灵颜色滤镜 CSS class */
function _sprClass(lv) {
  if (lv >= 26) return 'spr-max';
  if (lv >= 22) return 'spr-gold';
  if (lv >= 18) return 'spr-purple';
  if (lv >= 14) return 'spr-blue';
  if (lv >= 10) return 'spr-cyan';
  if (lv >= 6)  return 'spr-glow';
  return '';
}

const TABS = [
  { id:'orders',   icon:'list',   label:'订货' },
  // { id:'inventory', icon:'chart-bar', label:'库存' },  // 暂封：等数据迁移完成后重开
  { id:'delivery', icon:'map',    label:'配送' },
  { id:'drinks',   icon:'zap',    label:'饮品' },
  { id:'stock',    icon:'folder', label:'仓储' },
  { id:'status',   icon:'heart',  label:'状态' },
];

function MonitorStrip({ scale }){
  const m = window.APP_DATA.monitor;
  const [checking, setChecking] = React.useState(false);
  const isLoading = m.status === 'loading';
  const isError   = m.status === 'error';

  const recheck = (e) => {
    e.stopPropagation();
    if (checking) return;
    setChecking(true);
    // 等待下一次 app-data-updated 或超时 8s 后恢复
    const done = () => setChecking(false);
    const timer = setTimeout(done, 8000);
    const handler = () => { clearTimeout(timer); done(); window.removeEventListener('app-data-updated', handler); };
    window.addEventListener('app-data-updated', handler);
    if (window.companionHost && window.companionHost.requestRefresh) {
      window.companionHost.requestRefresh();
    }
  };

  const statusText = checking || isLoading ? '检测中…'
    : isError ? '● 连接失败'
    : '● 已连接';
  const statusColor = isError ? 'var(--red)' : undefined;

  return (
    <div className={'mon' + (checking || isLoading ? ' mon--checking' : '')}>
      <div className="mon__row">
        <span className="mon__dot" />
        <span className="mon__site"><b>{m.site}</b> · {m.source}</span>
        <span className="mon__stat" style={statusColor ? {color:statusColor} : undefined}>{statusText}</span>
        <span className="mon__btn" onPointerDown={e=>e.stopPropagation()}>
          <IconButton icon={checking?'loader':'reload'} label="重新检测" size="sm" variant="ghost" onClick={recheck} />
        </span>
      </div>
      <div className="mon__row">
        <span className="mon__host">今日到货 <b style={{color:'var(--green)'}}>{m.arrivingToday}</b> · 未到货 <b style={{color:'var(--amber)'}}>{m.notArrived}</b></span>
        <span className="mon__sync">{checking ? '轮询中…' : `同步 ${m.lastSync}`}</span>
      </div>
    </div>
  );
}

function CompanionWidget({ spriteScale: spProp }){
  const [open, setOpen]   = React.useState(false);
  const [tab, setTab]     = React.useState('orders');
  const [corner, setCorner] = React.useState('br');   // br bl tr tl
  const [free, setFree]   = React.useState(null);     // {x,y} while dragging
  const [alert, setAlert] = React.useState(false);
  const [dataVer, setDataVer] = React.useState(0);   // 触发重渲染
  const dragRef = React.useRef(null);

  const spriteScale = spProp || (window.__APP_TWEAKS && window.__APP_TWEAKS.spriteScale) || 6;

  // 监听数据更新事件 → 触发重渲染
  React.useEffect(() => {
    const onUpdated = () => setDataVer(v => v + 1);
    window.addEventListener('app-data-updated', onUpdated);

    const host = window.companionHost;
    if (host && host.onLiveData) {
      // Electron 模式: 数据由主进程通过 IPC 推来
      host.onLiveData(rawData => {
        if (typeof window._applyLiveData === 'function') window._applyLiveData(rawData);
      });
      host.onLiveDataError(msg => {
        console.warn('[live-data-error]', msg);
        if (window.APP_DATA) {
          window.APP_DATA.monitor = { ...window.APP_DATA.monitor, status:'error' };
          window.dispatchEvent(new CustomEvent('app-data-updated'));
        }
      });
    }

    return () => window.removeEventListener('app-data-updated', onUpdated);
  }, []);

  // 演示：进入后 1.6s 弹出「明天订货」提示；并响应「重放提示」事件
  React.useEffect(()=>{
    const replay=()=>{ setAlert(true); setOpen(false); };
    window.addEventListener('demo-alert', replay);
    let t;
    if (!window.__ALERT_SHOWN){
      t=setTimeout(()=>{ setAlert(true); window.__ALERT_SHOWN=true; }, 1600);
    }
    return ()=>{ window.removeEventListener('demo-alert', replay); if(t) clearTimeout(t); };
  },[]);

  // 挂件模式: 通知 Electron 宿主在展开/收起时调整窗口大小(浏览器下为空操作)
  React.useEffect(()=>{
    if (window.companionHost && typeof window.companionHost.setExpanded === 'function') {
      window.companionHost.setExpanded(open);
    }
  },[open]);

  const horiz = corner[1]==='r' ? 'right' : 'left';
  const vert  = corner[0]==='b' ? 'bottom' : 'top';

  // 停靠定位
  const M = 22;
  const dockStyle = free
    ? { left:free.x, top:free.y, right:'auto', bottom:'auto' }
    : { [horiz]:M, [vert]:M, alignItems: horiz==='right'?'flex-end':'flex-start' };

  /* —— 拖拽：按住小人/头部移动，松手吸附最近角 —— */
  const onPointerDown = (e)=>{
    if (e.button!==undefined && e.button!==0) return;
    const startX=e.clientX, startY=e.clientY;
    const el=dragRef.current;
    const rect=el.getBoundingClientRect();
    const offX=startX-rect.left, offY=startY-rect.top;
    let moved=false;
    const scene=document.getElementById('scene').getBoundingClientRect();
    const move=(ev)=>{
      const dx=ev.clientX-startX, dy=ev.clientY-startY;
      if (!moved && Math.hypot(dx,dy)>5){ moved=true; setOpen(false); }
      if (moved){
        setFree({ x: ev.clientX-offX-scene.left, y: ev.clientY-offY-scene.top });
      }
    };
    const up=(ev)=>{
      window.removeEventListener('pointermove',move);
      window.removeEventListener('pointerup',up);
      if (!moved){ setOpen(o=>!o); if(alert){ setAlert(false); setTab('orders'); } return; }
      // 吸附最近角
      const cx=ev.clientX-scene.left, cy=ev.clientY-scene.top;
      const h = cx < scene.width/2 ? 'l':'r';
      const v = cy < scene.height/2 ? 't':'b';
      setCorner(v+h);
      setFree(null);
    };
    window.addEventListener('pointermove',move);
    window.addEventListener('pointerup',up);
  };

  // 小人表情：监测/订货中→working，提示中→happy(弹跳)，否则 idle
  const spriteState = alert ? 'happy' : (open && tab==='orders') ? 'working' : 'idle';

  const Panels = { orders:window.OrdersPanel, inventory:window.InventoryPanel, delivery:window.DeliveryPanel, drinks:window.DrinkPanel, stock:window.StockPanel, status:window.StatusPanel };
  const ActivePanel = Panels[tab] || window.OrdersPanel;

  const R = window.REORDER.compute();
  const orderCount = R.tomorrow.length;
  const urgentNames = R.tomorrow
    .filter(r => r.urgency === 'high')
    .map(r => r.name.split(' ')[0])
    .slice(0, 2);
  const tomorrowSupplierCount = [...new Set(R.tomorrow.map(r => r.supplier))].length;

  const lv     = (window.APP_DATA && window.APP_DATA.vitals && window.APP_DATA.vitals.level) || 1;
  const evoNum = (window.APP_DATA && window.APP_DATA.vitals && window.APP_DATA.vitals.evoNum) || 0;

  const puck = (
    <div ref={!open?dragRef:null}
      className={'puck' + (alert?' puck--alert':'')}
      onPointerDown={!open?onPointerDown:undefined}>
      {alert && !open && (
        <div className="bubble" onPointerDown={e=>e.stopPropagation()}>
          <span className="bubble__close" onClick={()=>setAlert(false)}>✕</span>
          报告！明天有 <b>{tomorrowSupplierCount}</b> 家供应商送货，我核了库存——<b>{orderCount} 样要今天截单</b>{urgentNames.length > 0 ? `：${urgentNames.join('、')}库存偏低` : ''}。
          <span className="bubble__tail" />
        </div>
      )}
      <span className="puck__sprite evo-wrap">
        {/* ── 背景层（精灵后方）── */}
        {lv >= 29 && <span className="puck__galaxy" />}
        {lv >= 21 && <span className="puck__aura" />}
        {lv >= 23 && <span className="puck__rays" />}
        {lv >= 22 && <span className={`puck__legend${lv >= 28 ? ' puck__legend--max' : ''}`} />}

        {/* ── 翅膀（精灵两侧）── */}
        {lv >= 18 && <span className="puck__wing puck__wing--l" />}
        {lv >= 18 && <span className="puck__wing puck__wing--r" />}

        {/* ── 精灵本体（含颜色滤镜）── */}
        <span className={_sprClass(lv)}>
          <PixelSprite state={spriteState} scale={spriteScale} glow={alert || lv >= 6} />
        </span>

        {/* ── 光环（头顶）── */}
        {lv >= 15 && <span className={`puck__halo${lv >= 27 ? ' puck__halo--big' : ''}`} />}

        {/* ── 轨道环（外→内→外扩）── */}
        {lv >= 4 && (
          <span className={`puck__orbit${lv < 6 ? ' puck__orbit--faint' : ''}${lv >= 25 ? ' puck__orbit--rbw' : ''}`} />
        )}
        {lv >= 10 && <span className="puck__orbit2" />}
        {lv >= 14 && <span className="puck__orbit3" />}

        {/* ── 轨道光球 ── */}
        {lv >= 7  && <span className="dot-track" style={{'--r':'42px','--s':'3s','--d':'0s'}} />}
        {lv >= 8  && <span className="dot-track" style={{'--r':'42px','--s':'3s','--d':'-1.5s'}} />}
        {lv >= 9  && <span className="dot-track" style={{'--r':'42px','--s':'3s','--d':'-1s'}} />}
        {lv >= 17 && <span className="dot-track" style={{'--r':'33px','--s':'2.2s','--d':'0s','--dc':'#5cd2ff'}} />}
        {lv >= 20 && <span className="dot-track" style={{'--r':'33px','--s':'2.2s','--d':'-1.1s','--dc':'#5cd2ff'}} />}
        {lv >= 24 && <span className="dot-track" style={{'--r':'54px','--s':'5s','--d':'-1.5s','--dc':'#b98cff'}} />}

        {/* ── 漂浮星星（分两批解锁）── */}
        {lv >= 11 && [1,2,3,4].map(i => <span key={i} className={`puck__star puck__star--${i}`}>✦</span>)}
        {lv >= 16 && [5,6].map(i => <span key={i} className={`puck__star puck__star--${i}`}>✧</span>)}
        {lv >= 20 && [7,8].map(i => <span key={i} className={`puck__star puck__star--${i}`}>·</span>)}

        {/* ── 顶冠（图标随等级升华）── */}
        {lv >= 12 && (
          <span className={`puck__crown${lv >= 30 ? ' puck__crown--max' : ''}`}>
            {lv >= 30 ? '✦' : lv >= 24 ? '♔' : lv >= 19 ? '♛' : '◆'}
          </span>
        )}
      </span>
      <span className="puck__base" />
      <span className="puck__pill">
        <span className={'pdot' + (alert?' pdot--warn':'')} />
        {alert ? <React.Fragment>待订 <b>{orderCount}</b></React.Fragment> : '值守中'}
      </span>
    </div>
  );

  const panel = open ? (
    <section className="wx" onPointerDown={e=>e.stopPropagation()}>
      <header className="wx__hd" ref={open?dragRef:null} onPointerDown={onPointerDown}>
        <PixelSprite state={spriteState} scale={3} shadow={false} glow />
        <div className="wx__id">
          <span className="wx__name">Guimarães <span className="codon">订货特工</span></span>
          <span className="wx__sub">{(window.APP_DATA && window.APP_DATA.vitals) ? `${window.APP_DATA.vitals.stage} · Lv.${window.APP_DATA.vitals.level}` : '采购员 · Lv.1'}</span>
        </div>
        <Badge tone={alert?'warn':'active'} dot pulse>{alert?'待订货':'在线'}</Badge>
        <span onPointerDown={e=>e.stopPropagation()}>
          <IconButton icon="chevron-down" label="收起" variant="ghost" size="sm"
            onClick={()=>setOpen(false)} />
        </span>
      </header>
      <MonitorStrip />
      <div className="wx__tabs">
        <TabBar tabs={TABS} active={tab} onChange={(id)=>{ setTab(id); if(id==='orders') setAlert(false); }} />
      </div>
      <div className="wx__body scroll">
        <ActivePanel />
      </div>
    </section>
  ) : null;

  const children = open ? [panel] : [puck];

  return (
    <div id="dock" className="dock" data-corner={corner} data-h={horiz} data-v={vert} style={dockStyle}>
      {children.map((c,i)=><React.Fragment key={i}>{c}</React.Fragment>)}
    </div>
  );
}

window.CompanionWidget = CompanionWidget;
