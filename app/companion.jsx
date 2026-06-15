/* ============================================================
   companion.jsx — 桌面陪伴小人本体
   · 收起态：像素小人（底座/状态药丸/裸身三种形态）+ 待订徽章
   · 提示：冒气泡 + 弹跳
   · 可拖动到任意角落（吸附四角）
   · 点击展开 340px 陪伴面板（订货/任务/状态/活动）
   导出到 window: Companion
   ============================================================ */
const CDS = window.GuimarEsPixelDesignSystem_2bf0cf;
const { PixelSprite, TabBar, IconButton, Badge: CBadge } = CDS;

const MARGIN = 24;
const TOP_MARGIN = 46;

function nearestCorner(x, y) {
  const w = window.innerWidth, h = window.innerHeight;
  return (y < h / 2 ? 't' : 'b') + (x < w / 2 ? 'l' : 'r');
}

function Companion({ data, orders, tasks, scale = 5, collapsedForm = 'pedestal',
                     onToggleOrder, onToggleTask, onGenerate }) {
  const { useState, useEffect, useRef, useCallback } = React;
  const [corner, setCorner] = useState('br');
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState('orders');
  const [free, setFree] = useState(null);      // {x,y} during drag
  const [dragging, setDragging] = useState(false);
  const [bubbleIdx, setBubbleIdx] = useState(0);
  const [showBubble, setShowBubble] = useState(false);
  const wrapRef = useRef(null);
  const drag = useRef({ active: false, moved: false, sx: 0, sy: 0, gx: 0, gy: 0 });

  const pending = [...orders.tomorrow, ...orders.week].filter(o => !o.done).length;
  const isTop = corner[0] === 't';
  const isRight = corner[1] === 'r';

  /* —— 弹跳 —— */
  const bounce = useCallback(() => {
    const el = wrapRef.current;
    if (!el) return;
    el.classList.remove('gx-bounce');
    void el.offsetWidth;
    el.classList.add('gx-bounce');
    setTimeout(() => el && el.classList.remove('gx-bounce'), 760);
  }, []);

  /* —— 收起时定时冒泡提醒 —— */
  useEffect(() => {
    if (open || pending === 0) { setShowBubble(false); return; }
    let i = 0;
    const ping = () => {
      setBubbleIdx(b => (b + 1) % data.alerts.length);
      setShowBubble(true);
      bounce();
    };
    const intro = setTimeout(ping, 1400);
    const loop = setInterval(ping, 9000);
    return () => { clearTimeout(intro); clearInterval(loop); };
  }, [open, pending, data.alerts.length, bounce]);

  /* —— 拖动 —— */
  const onMove = useCallback((e) => {
    const d = drag.current;
    if (!d.active) return;
    const dx = e.clientX - d.sx, dy = e.clientY - d.sy;
    if (!d.moved && Math.hypot(dx, dy) > 6) { d.moved = true; setDragging(true); setOpen(false); setShowBubble(false); }
    if (d.moved) {
      const x = Math.max(8, Math.min(window.innerWidth - 80, e.clientX - d.gx));
      const y = Math.max(TOP_MARGIN, Math.min(window.innerHeight - 80, e.clientY - d.gy));
      setFree({ x, y });
    }
  }, []);

  const onUp = useCallback((e) => {
    const d = drag.current;
    window.removeEventListener('pointermove', onMove);
    window.removeEventListener('pointerup', onUp);
    if (d.moved) {
      setCorner(nearestCorner(e.clientX, e.clientY));
      setFree(null);
      setDragging(false);
    } else {
      setOpen(o => !o);
      setShowBubble(false);
    }
    d.active = false; d.moved = false;
  }, [onMove]);

  const onDown = useCallback((e) => {
    const r = wrapRef.current.getBoundingClientRect();
    drag.current = { active: true, moved: false, sx: e.clientX, sy: e.clientY,
                     gx: e.clientX - r.left, gy: e.clientY - r.top };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  }, [onMove, onUp]);

  /* —— 容器定位 —— */
  const pos = free
    ? { left: free.x, top: free.y }
    : isRight
      ? { right: MARGIN } : { left: MARGIN };
  if (!free) { if (isTop) pos.top = TOP_MARGIN; else pos.bottom = MARGIN; }

  const containerStyle = {
    position: 'fixed', zIndex: 4000, display: 'flex', flexDirection: 'column',
    gap: 12, alignItems: isRight ? 'flex-end' : 'flex-start',
    ...pos, cursor: dragging ? 'grabbing' : 'default',
  };

  const spriteState = open ? 'working' : 'idle';

  /* —— 气泡 —— */
  const bubble = (showBubble && !open && !dragging) ? (
    <button className={'gx-bubble' + (isTop ? ' is-top' : ' is-bottom') + (isRight ? ' is-right' : ' is-left')}
      onClick={() => { setOpen(true); setShowBubble(false); }}>
      <span className="gx-bubble__txt">{data.alerts[bubbleIdx]}</span>
      <span className="gx-bubble__tail" />
    </button>
  ) : null;

  /* —— 收起态小人块 —— */
  const spriteBlock = (
    <div className="gx-sprblock" style={{ alignItems: isRight ? 'flex-end' : 'flex-start' }}>
      {!isTop && bubble}
      <div ref={wrapRef} className={'gx-spr gx-spr--' + collapsedForm} onPointerDown={onDown}
        title={open ? '收起' : '点击查看订货提示 · 可拖动'}>
        <div className={'gx-spr__float' + (open || dragging ? '' : ' is-live')}>
          {collapsedForm === 'pedestal' && <span className="gx-spr__base" />}
          <PixelSprite state={spriteState} scale={scale} glow={!open && pending > 0} shadow={collapsedForm !== 'pedestal'} />
          {collapsedForm !== 'pill' && pending > 0 && !open &&
            <span className="gx-spr__count">{pending}</span>}
          {collapsedForm === 'pill' && (
            <span className="gx-spr__pill pixel-panel">
              <span className={'gx-spr__dot' + (data.site.connected ? ' is-on' : '')} />
              <b>{pending}</b> 待订
            </span>
          )}
        </div>
      </div>
      {isTop && bubble}
    </div>
  );

  /* —— 展开面板 —— */
  const panel = open && !dragging ? (
    <section className="gx-widget pixel-panel">
      <header className="gx-widget__hd">
        <span className="gx-widget__avatar"><PixelSprite state="working" scale={2} shadow={false} /></span>
        <span className="gx-widget__id">
          <span className="gx-widget__name">{data.agent.name}</span>
          <span className="gx-widget__call">{data.agent.callsign}</span>
        </span>
        {pending > 0 && <CBadge tone="warn">{pending} 待订</CBadge>}
        <IconButton icon="minus" label="收起" size="sm" onClick={() => setOpen(false)} />
      </header>

      <div className="gx-widget__tabs">
        <TabBar active={tab} onChange={setTab} tabs={[
          { id: 'orders',   label: '订货', icon: 'bullseye',    tone: 'accent' },
          { id: 'tasks',    label: '任务', icon: 'checkbox-on', tone: 'mood'   },
          { id: 'status',   label: '状态', icon: 'heart',       tone: 'level'  },
          { id: 'activity', label: '活动', icon: 'command',     tone: 'skill'  },
        ]} />
      </div>

      <div className="gx-widget__body">
        {tab === 'orders'   && <OrdersPanel data={data} orders={orders} onToggleOrder={onToggleOrder} onGenerate={onGenerate} />}
        {tab === 'tasks'    && <TasksPanel tasks={tasks} onToggleTask={onToggleTask} />}
        {tab === 'status'   && <StatusPanel agent={data.agent} />}
        {tab === 'activity' && <ActivityPanel data={data} />}
      </div>
    </section>
  ) : null;

  return (
    <div style={containerStyle}>
      {!isTop && panel}
      {spriteBlock}
      {isTop && panel}
    </div>
  );
}

window.Companion = Companion;
