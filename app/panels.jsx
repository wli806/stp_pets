/* ============================================================
   PANELS — 订货 / 库存 / 配送 / 状态
   数据全部来自 window.APP_DATA, 订货建议来自 window.REORDER.compute()
   ============================================================ */
const NS = window.GuimarEsPixelDesignSystem_2bf0cf;
const { Panel, Button, Badge, Tag, ActivityReadout, LevelBadge, StatBar, Stat, Icon } = NS;

const PANELS_CSS = `
.row{ display:flex; align-items:center; gap:var(--sp-3);
  padding:var(--sp-3); background:var(--surface-inset); border:var(--border-w) solid var(--border); }
.row + .row{ margin-top:2px; }
.row__dot{ flex:0 0 auto; width:8px; height:8px; align-self:flex-start; margin-top:5px;
  box-shadow:0 0 6px 0 currentColor; }
.dot--high{ background:var(--red);   color:var(--red); }
.dot--mid{  background:var(--amber); color:var(--amber); }
.dot--low{  background:var(--green); color:var(--green); }
.row__main{ flex:1; min-width:0; display:flex; flex-direction:column; gap:3px; }
.row__name{ font-family:var(--type-ui); font-size:var(--text-sm); color:var(--text-primary);
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.row__sub{ display:flex; align-items:center; gap:6px; flex-wrap:wrap;
  font-family:var(--type-ui); font-size:var(--text-2xs); color:var(--text-tertiary); }
.chip{ display:inline-flex; align-items:center; gap:4px; padding:1px 5px;
  font-family:var(--type-display); font-size:7px; letter-spacing:.1em; color:#fff;
  border:1px solid rgba(0,0,0,.25); white-space:nowrap; }
.chip__d{ width:5px; height:5px; background:rgba(255,255,255,.85); }
.row__qty{ flex:0 0 auto; text-align:right; display:flex; flex-direction:column; gap:1px; align-items:flex-end; }
.row__amt{ font-family:var(--type-readout); font-size:var(--text-md); letter-spacing:.03em; color:var(--accent);
  padding:2px var(--sp-2); background:color-mix(in oklab,var(--accent) 12%,var(--surface));
  border:var(--border-w) solid color-mix(in oklab,var(--accent) 32%,var(--border)); white-space:nowrap; }
.row__amt--week{ color:var(--c-skill); background:color-mix(in oklab,var(--c-skill) 12%,var(--surface));
  border-color:color-mix(in oklab,var(--c-skill) 32%,var(--border)); }
.row__cap{ font-family:var(--type-ui); font-size:var(--text-2xs); color:var(--text-quaternary); }

.sec{ display:flex; align-items:center; gap:var(--sp-2); margin:var(--sp-2) 0 var(--sp-1);
  font-family:var(--type-ui); font-size:var(--text-2xs); letter-spacing:var(--tracking-wide);
  text-transform:uppercase; color:var(--text-quaternary); }
.sec::after{ content:""; flex:1; height:2px; background:var(--border-faint); }
.tipline{ font-family:var(--type-ui); font-size:var(--text-2xs); color:var(--text-tertiary);
  display:flex; align-items:center; gap:var(--sp-2); }
.statgrid{ display:grid; grid-template-columns:1fr 1fr; gap:var(--sp-3); }

/* —— 库存条 —— */
.inv__bar{ width:74px; height:7px; flex:0 0 auto; background:var(--surface);
  border:var(--border-w) solid var(--border); position:relative; }
.inv__fill{ position:absolute; inset:0; transform-origin:left; }
.inv__par{ position:absolute; top:-2px; bottom:-2px; width:2px; background:var(--text-secondary); opacity:.8; }

/* —— 数量加减按钮 —— */
.qty-row{ display:flex; align-items:center; gap:2px; }
.qty-btn{ width:16px; height:16px; padding:0; border:var(--border-w) solid var(--border);
  background:var(--surface-raised); color:var(--text-tertiary);
  font-size:11px; line-height:1; cursor:pointer;
  display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; }
.qty-btn:hover:not(:disabled){ border-color:var(--accent); color:var(--accent); }
.qty-btn:active:not(:disabled){ background:color-mix(in oklab,var(--accent) 12%,var(--surface)); }
.qty-btn:disabled{ opacity:.35; cursor:default; }
.del-btn{ border:var(--border-w) solid var(--border); background:none;
  color:var(--text-quaternary); font-size:var(--text-2xs); font-family:var(--type-ui);
  padding:1px 5px; cursor:pointer; }
.del-btn:hover:not(:disabled){ border-color:var(--red); color:var(--red); }
.del-btn:disabled{ opacity:.35; cursor:default; }

/* —— 新增表单 —— */
.add-form{ padding:var(--sp-3); background:color-mix(in oklab,var(--accent) 6%,var(--surface-inset));
  border-bottom:var(--border-w) solid var(--border); display:flex; flex-direction:column; gap:var(--sp-2); }
.add-input{ font-family:var(--type-ui); font-size:var(--text-sm); color:var(--text-primary);
  background:var(--surface); border:var(--border-w) solid var(--border);
  padding:4px 7px; width:100%; box-sizing:border-box; }
.add-input:focus{ outline:none; border-color:var(--accent); }
.add-row{ display:flex; gap:var(--sp-2); }
.add-actions{ display:flex; gap:var(--sp-2); justify-content:flex-end; margin-top:var(--sp-1); }

/* —— 配送日历 —— */
.cal{ display:flex; flex-direction:column; gap:2px; }
.cal__day{ display:flex; align-items:flex-start; gap:var(--sp-3); padding:var(--sp-2) var(--sp-3);
  background:var(--surface-inset); border:var(--border-w) solid var(--border); }
.cal__day--today{ border-color:var(--accent); background:color-mix(in oklab,var(--accent) 8%,var(--surface-inset)); }
.cal__day--tmr{ border-color:var(--amber); }
.cal__d{ flex:0 0 46px; display:flex; flex-direction:column; gap:1px; }
.cal__wd{ font-family:var(--type-ui); font-size:var(--text-sm); color:var(--text-secondary); }
.cal__num{ font-family:var(--type-readout); font-size:var(--text-lg); color:var(--text-primary); line-height:1; }
.cal__day--today .cal__num{ color:var(--accent); }
.cal__tag{ font-family:var(--type-display); font-size:6px; letter-spacing:.08em; padding:1px 3px; align-self:flex-start;
  border:1px solid currentColor; }
.cal__tag--today{ color:var(--accent); }
.cal__tag--tmr{ color:var(--amber); }
.cal__ship{ flex:1; display:flex; flex-wrap:wrap; gap:4px; padding-top:2px; min-height:18px; }
.cal__empty{ font-family:var(--type-ui); font-size:var(--text-2xs); color:var(--text-quaternary); padding-top:3px; }
`;
(function ensure(){
  if (document.getElementById('panels-css')) return;
  const s=document.createElement('style'); s.id='panels-css'; s.textContent=PANELS_CSS; document.head.appendChild(s);
})();

function SupChip({ code }){
  const s = window.APP_DATA.suppliers[code];
  if (!s) {
    const short = String(code).split(/[\s\-_]/)[0].slice(0, 10).toUpperCase();
    return <span className="chip" style={{ background:'#4b5563' }}><span className="chip__d" />{short}</span>;
  }
  return <span className="chip" style={{ background:s.color }}><span className="chip__d" />{s.name}</span>;
}

/* ---------- 订货提示 ---------- */
function OrderRow({ r, week }){
  const s = window.APP_DATA.suppliers[r.supplier] || {};
  return (
    <div className="row">
      <span className={'row__dot dot--'+r.urgency} />
      <div className="row__main">
        <span className="row__name">{r.name}</span>
        <span className="row__sub">
          <SupChip code={r.supplier} />
          {r.reason}
        </span>
      </div>
      <div className="row__qty">
        <span className={'row__amt' + (week?' row__amt--week':'')}>＋{r.suggQty} {r.unit}</span>
        <span className="row__cap">{r.s.cat || ''}</span>
      </div>
    </div>
  );
}

function OrdersPanel(){
  const R = window.REORDER.compute();
  const [done, setDone] = React.useState(false);
  const m = window.APP_DATA.monitor;
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'var(--sp-4)' }}>
      <Panel title="明天订货" icon="alert" tone="accent" tight
        actions={<Badge tone="warn" pulse dot>今天截单 {R.tomorrow.length}</Badge>}
        footer={
          <React.Fragment>
            <span className="tipline"><Icon name="sync" size={12} /> 周二送货 · 今天 14:00 前下单</span>
            <span style={{ flex:1 }} />
            <Button variant={done?'secondary':'primary'} size="sm" icon={done?'check':'checkbox'}
              onClick={()=>setDone(d=>!d)}>{done?'草稿已生成':'一键生成订单'}</Button>
          </React.Fragment>
        }>
        <div style={{ padding:'var(--sp-1)' }}>
          {R.tomorrow.length
            ? R.tomorrow.map((r,i)=><OrderRow key={i} r={r} />)
            : <div className="cal__empty" style={{padding:'var(--sp-3)'}}>明天暂无需补货项 ✓</div>}
        </div>
      </Panel>

      <Panel title="本周补货" icon="calendar" tone="skill" tight
        actions={<Tag tone="skill">周四前下单</Tag>}>
        <div style={{ padding:'var(--sp-1)' }}>
          {R.week.map((r,i)=><OrderRow key={i} r={r} week />)}
        </div>
      </Panel>

      <div className="tipline" style={{ justifyContent:'center', opacity:.8 }}>
        <Icon name="check" size={12} color="var(--green)" /> 其余 {R.okCount} 项库存健康 · 数据源 {m.source}
      </div>
    </div>
  );
}

/* ---------- 库存 ---------- */
function InvRow({ r, onAdjust, busy }){
  const cap = Math.max(r.par * 2, r.qty, 1);
  const fillPct = Math.min(100, (r.qty / cap) * 100);
  const parPct  = Math.min(100, (r.par / cap) * 100);
  const low = r.belowPar;
  const color = r.urgency==='high' ? 'var(--red)' : low ? 'var(--amber)' : 'var(--green)';
  const isBusy = r.id && busy && busy.has(r.id);
  return (
    <div className="row">
      <div className="row__main">
        <span className="row__name">{r.name}</span>
        <span className="row__sub">
          <SupChip code={r.supplier} />
          <span style={{ color: low?'var(--amber)':'var(--text-quaternary)' }}>
            约够 {Math.round(r.daysLeft)} 天
          </span>
        </span>
      </div>
      <div className="inv__bar" title={`库存 ${r.qty} / 订货点 ${r.par}`}>
        <span className="inv__fill" style={{ background:color, transform:`scaleX(${fillPct/100})` }} />
        <span className="inv__par" style={{ left:parPct+'%' }} />
      </div>
      <div className="row__qty">
        <div className="qty-row">
          <button className="qty-btn" disabled={!r.id || isBusy} onClick={()=>onAdjust(r.id, -1)}>−</button>
          <span className="row__amt" style={{ color, background:'transparent', borderColor:'transparent', padding:'0 3px', minWidth:28, textAlign:'center' }}>
            {r.qty}
          </span>
          <button className="qty-btn" disabled={!r.id || isBusy} onClick={()=>onAdjust(r.id, 1)}>+</button>
        </div>
        <span className="row__cap" style={{ textAlign:'right' }}>{r.unit}</span>
      </div>
    </div>
  );
}

function InventoryPanel(){
  const R = window.REORDER.compute();
  const sorted = [...R.rows].sort((a,b)=> (a.need===b.need ? a.daysLeft-b.daysLeft : (a.need?-1:1)));
  const lowN = R.needRows.length;

  const [busy, setBusy]   = React.useState(new Set());
  const [adding, setAdding] = React.useState(false);
  const [form, setForm]   = React.useState({ name:'', qty:'0', unit:'', notes:'' });

  // 把 id 从 APP_DATA.inventory 注入到 REORDER rows（REORDER 计算时未传 id）
  const idByName = {};
  for (const item of (window.APP_DATA.inventory || [])) {
    if (item.id) idByName[item.name] = item.id;
  }
  const rows = sorted.map(r => ({ ...r, id: idByName[r.name] || null }));

  const call = async (id, method, path, body) => {
    if (!window.companionHost) return;
    setBusy(s => new Set([...s, id]));
    try { await window.companionHost.apiWrite(method, path, body); }
    catch(e) { console.error(e); }
    finally { setBusy(s => { const n = new Set(s); n.delete(id); return n; }); }
  };

  const onAdjust = (id, delta) => {
    if (!id || busy.has(id)) return;
    call(id, 'PATCH', `/api/sushi/inventory/${id}`, { delta });
  };

  const onAdd = async () => {
    if (!form.name.trim() || !window.companionHost) return;
    try {
      await window.companionHost.apiWrite('POST', '/api/sushi/inventory', {
        name: form.name.trim(),
        quantity: parseFloat(form.qty) || 0,
        unit: form.unit.trim(),
        notes: form.notes.trim() || null,
      });
      setAdding(false);
      setForm({ name:'', qty:'0', unit:'', notes:'' });
    } catch(e) { console.error(e); }
  };

  return (
    <Panel title="库存统计" icon="chart-bar" tone="accent" tight
      actions={
        <React.Fragment>
          <Badge tone={lowN?'warn':'active'} dot>{lowN} 项偏低</Badge>
          <Button variant="ghost" size="sm" onClick={()=>setAdding(a=>!a)}>{adding?'收起':'新增'}</Button>
        </React.Fragment>
      }>
      {adding && (
        <div className="add-form">
          <input className="add-input" placeholder="品目名称*" value={form.name}
            onChange={e=>setForm(f=>({...f,name:e.target.value}))} />
          <div className="add-row">
            <input className="add-input" placeholder="数量" type="number" min="0" value={form.qty}
              style={{flex:1}} onChange={e=>setForm(f=>({...f,qty:e.target.value}))} />
            <input className="add-input" placeholder="单位" value={form.unit}
              style={{width:60}} onChange={e=>setForm(f=>({...f,unit:e.target.value}))} />
          </div>
          <input className="add-input" placeholder="备注（可选）" value={form.notes}
            onChange={e=>setForm(f=>({...f,notes:e.target.value}))} />
          <div className="add-actions">
            <button className="del-btn" onClick={()=>{setAdding(false);setForm({name:'',qty:'0',unit:'',notes:''});}}>取消</button>
            <Button variant="primary" size="sm" disabled={!form.name.trim()} onClick={onAdd}>确认添加</Button>
          </div>
        </div>
      )}
      <div style={{ padding:'var(--sp-1)' }}>
        {rows.map((r,i)=><InvRow key={i} r={r} onAdjust={onAdjust} busy={busy} />)}
      </div>
    </Panel>
  );
}

/* ---------- 配送日历 ---------- */
function DeliveryPanel(){
  const cal = window.APP_DATA.calendar;
  return (
    <Panel title="本周送货" icon="map" tone="skill" tight
      actions={<Tag tone="neutral">{cal.range}</Tag>}>
      <div className="cal" style={{ padding:'var(--sp-1)' }}>
        {cal.days.map((d,i)=>(
          <div key={i} className={'cal__day' + (d.today?' cal__day--today':'') + (d.tomorrow?' cal__day--tmr':'')}>
            <div className="cal__d">
              <span className="cal__wd">周{d.label}</span>
              <span className="cal__num">{d.date}</span>
              {d.today && <span className="cal__tag cal__tag--today">今天</span>}
              {d.tomorrow && <span className="cal__tag cal__tag--tmr">明天</span>}
            </div>
            <div className="cal__ship">
              {d.ship.length
                ? d.ship.map((c,j)=><SupChip key={j} code={c} />)
                : <span className="cal__empty">— 无送货 —</span>}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

/* ---------- 小人状态 ---------- */
const STATUS_CSS = `
.stat-hint{ font-family:var(--type-ui); font-size:var(--text-2xs); color:var(--text-quaternary);
  padding:0 var(--sp-3); margin-top:-6px; margin-bottom:var(--sp-2); }
.lvup{ padding:6px 10px; margin-bottom:2px;
  background:color-mix(in oklab,var(--accent) 14%,var(--surface-inset));
  border:var(--border-w) solid var(--accent);
  font-family:var(--type-display); font-size:9px; letter-spacing:.12em; color:var(--accent);
  text-align:center; animation:pk-hop .9s var(--ease-out); }
.xpgain{ font-family:var(--type-readout); font-size:var(--text-2xs);
  color:var(--accent); letter-spacing:.04em; }
`;
(function ensureSt(){
  if(document.getElementById('status-css')) return;
  const s=document.createElement('style'); s.id='status-css'; s.textContent=STATUS_CSS; document.head.appendChild(s);
})();

function StatusPanel(){
  const v = window.APP_DATA.vitals;
  const l = window.APP_DATA.log;
  const lines = l.lines.map((x,i)=>(<React.Fragment key={i}><b>{x.t}</b>  {x.msg}</React.Fragment>));

  const energyHint = v.energy >= 80 ? '无紧急订货压力，轻松值守中'
    : v.energy >= 50 ? '有订货任务待处理，保持专注'
    : '多项库存告急，高度紧绷中';

  const moodHint = `${v.mood}% 品目高于订货点 · 库存${v.mood >= 70 ? '健康' : v.mood >= 40 ? '一般' : '偏低'}`;

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'var(--sp-4)' }}>
      <LevelBadge level={v.level} stage={v.stage} evo={v.evo} xp={v.xp} xpMax={v.xpMax} segments={20} />

      {v.leveledUp && (
        <div className="lvup">⬆ 升级！晋升为「{v.stage}」· 解锁 {v.evo}</div>
      )}

      <Panel title="状态指标" icon="heart" tone="mood">
        <StatBar icon="zap"      label="精力" tone="energy" value={v.energy} valueText={v.energy} />
        <p className="stat-hint">{energyHint}</p>
        <StatBar icon="heart"    label="心情" tone="mood"   value={v.mood}   valueText={`${v.mood}%`} />
        <p className="stat-hint">{moodHint}</p>
        <StatBar icon="bullseye" label="专注" tone="focus"  value={v.focus}  valueText={v.focus} />
        <p className="stat-hint">数据刚同步 · 实时准确</p>
      </Panel>

      <div className="statgrid">
        <Stat icon="calendar" label="连续值守" value={v.streak}     unit="天" tone="level" delta="+1" />
        <Stat icon="eye"      label="今日巡检" value={v.checksToday} unit="次" tone="skill"
          delta={<span className="xpgain">+{v.xpGain || 0} XP</span>} />
      </div>

      <Panel title="活动日志" icon="command" tone="accent" inset>
        <ActivityReadout state="working" action={l.now} elapsed={l.elapsed} lines={lines} prompt="▸" />
      </Panel>

    </div>
  );
}

/* ---------- 告警横幅 CSS ---------- */
(function ensureAlert(){
  if (document.getElementById('alert-banner-css')) return;
  const s = document.createElement('style'); s.id = 'alert-banner-css';
  s.textContent = `
.alert-bann{ display:flex; align-items:flex-start; gap:6px; padding:5px 10px;
  font-family:var(--type-ui); font-size:var(--text-2xs); line-height:1.5; }
.alert-bann--red{ background:color-mix(in oklab,var(--red) 12%,var(--surface-inset));
  border-bottom:var(--border-w) solid color-mix(in oklab,var(--red) 30%,var(--border)); color:var(--red); }
.alert-bann--amb{ background:color-mix(in oklab,var(--amber) 12%,var(--surface-inset));
  border-bottom:var(--border-w) solid color-mix(in oklab,var(--amber) 30%,var(--border)); color:var(--amber); }`;
  document.head.appendChild(s);
})();

/* ---------- 饮品库存 ---------- */
function DrinkRow({ d, daysLeft, onAdjust, onDelete, busy }){
  const isBusy = busy && busy.has(d.id);
  const isZero = d.qty === 0;
  const isLow  = !isZero && d.lowThreshold > 0 && d.qty <= d.lowThreshold;
  const color  = isZero ? 'var(--red)' : isLow ? 'var(--amber)' : undefined;
  const dlColor = daysLeft !== null && daysLeft <= 3 ? 'var(--amber)' : 'var(--text-quaternary)';
  return (
    <div className="row">
      {(isZero || isLow) && <span className={'row__dot dot--' + (isZero ? 'high' : 'mid')} />}
      <div className="row__main">
        <span className="row__name">{d.name}</span>
        {(daysLeft !== null || d.notes) && (
          <span className="row__sub">
            {daysLeft !== null && <span style={{ color:dlColor }}>约够 {daysLeft} 天</span>}
            {d.notes && <span>{d.notes}</span>}
          </span>
        )}
      </div>
      <div className="row__qty">
        <div className="qty-row">
          <button className="qty-btn" disabled={isBusy} onClick={()=>onAdjust(d, -1)}>−</button>
          <span className="row__amt" style={{ color, background:'transparent', borderColor:'transparent', padding:'0 3px', minWidth:28, textAlign:'center' }}>
            {d.qty}
          </span>
          <button className="qty-btn" disabled={isBusy} onClick={()=>onAdjust(d, 1)}>+</button>
          {d.unit && <span style={{ fontSize:'var(--text-2xs)', color:'var(--text-quaternary)', marginLeft:3 }}>{d.unit}</span>}
        </div>
        <div style={{ display:'flex', justifyContent:'flex-end', alignItems:'center', gap:6, marginTop:2 }}>
          <span className="row__cap">{d.updated}</span>
          <button className="del-btn" disabled={isBusy} onClick={()=>onDelete(d)}>删除</button>
        </div>
      </div>
    </div>
  );
}

function DrinkPanel(){
  const drinks = window.APP_DATA.drinks || [];
  const alertCount = drinks.filter(d => d.qty === 0 || (d.lowThreshold > 0 && d.qty <= d.lowThreshold)).length;
  const zeroCount  = drinks.filter(d => d.qty === 0).length;
  const [busy, setBusy]     = React.useState(new Set());
  const [adding, setAdding] = React.useState(false);
  const [form, setForm]     = React.useState({ name:'', qty:'0', unit:'瓶', notes:'' });

  const call = async (id, fn) => {
    if (!window.companionHost) return;
    setBusy(s => new Set([...s, id]));
    try { await fn(); }
    catch(e) { console.error(e); }
    finally { setBusy(s => { const n = new Set(s); n.delete(id); return n; }); }
  };

  const onAdjust = (d, delta) => {
    if (busy.has(d.id)) return;
    const newQty = Math.max(0, d.qty + delta);
    const actual = newQty - d.qty;
    if (actual !== 0 && window._logUsage) window._logUsage('drinks', d.id, d.name, actual);
    call(d.id, () => window.companionHost.apiWrite('PUT', `/api/sushi/drinks/${d.id}`, { quantity: newQty }));
  };

  const onDelete = (d) => {
    if (busy.has(d.id)) return;
    if (!confirm(`删除「${d.name}」？`)) return;
    call(d.id, () => window.companionHost.apiWrite('DELETE', `/api/sushi/drinks/${d.id}`));
  };

  const onAdd = async () => {
    if (!form.name.trim() || !window.companionHost) return;
    try {
      await window.companionHost.apiWrite('POST', '/api/sushi/drinks', {
        name:     form.name.trim(),
        quantity: parseFloat(form.qty) || 0,
        unit:     form.unit.trim(),
        notes:    form.notes.trim() || null,
      });
      setAdding(false);
      setForm({ name:'', qty:'0', unit:'瓶', notes:'' });
    } catch(e) { console.error(e); }
  };

  return (
    <Panel title="饮品库存" icon="zap" tone="skill" tight
      actions={
        <React.Fragment>
          {alertCount > 0
            ? <Badge tone={zeroCount ? 'danger' : 'warn'} dot>{alertCount} 项告警</Badge>
            : drinks.length > 0 && <Tag tone="skill">{drinks.length} 种</Tag>}
          <Button variant="ghost" size="sm" onClick={()=>setAdding(a=>!a)}>{adding?'收起':'新增'}</Button>
        </React.Fragment>
      }>

      {adding && (
        <div className="add-form">
          <input className="add-input" placeholder="饮品名称*" value={form.name}
            onChange={e=>setForm(f=>({...f,name:e.target.value}))} />
          <div className="add-row">
            <input className="add-input" placeholder="数量" type="number" min="0" value={form.qty}
              style={{flex:1}} onChange={e=>setForm(f=>({...f,qty:e.target.value}))} />
            <input className="add-input" placeholder="单位" value={form.unit}
              style={{width:54}} onChange={e=>setForm(f=>({...f,unit:e.target.value}))} />
          </div>
          <input className="add-input" placeholder="备注（可选）" value={form.notes}
            onChange={e=>setForm(f=>({...f,notes:e.target.value}))} />
          <div className="add-actions">
            <button className="del-btn" onClick={()=>{setAdding(false);setForm({name:'',qty:'0',unit:'瓶',notes:''});}}>取消</button>
            <Button variant="primary" size="sm" disabled={!form.name.trim()} onClick={onAdd}>确认添加</Button>
          </div>
        </div>
      )}

      {drinks.length === 0 && !adding ? (
        <div style={{ padding:'var(--sp-4)', textAlign:'center', display:'flex', flexDirection:'column', gap:'var(--sp-2)' }}>
          <span style={{ fontFamily:'var(--type-ui)', fontSize:'var(--text-sm)', color:'var(--text-tertiary)' }}>暂无饮品数据</span>
          <span style={{ fontFamily:'var(--type-ui)', fontSize:'var(--text-2xs)', color:'var(--text-quaternary)', lineHeight:1.6 }}>
            点击右上角「新增」添加第一种饮品
          </span>
        </div>
      ) : (
        <div style={{ padding:'var(--sp-1)' }}>
          {drinks.map((d,i) => {
            const dl = window._daysLeft ? window._daysLeft('drinks', d.id, d.qty) : null;
            return <DrinkRow key={d.id||i} d={d} daysLeft={dl} onAdjust={onAdjust} onDelete={onDelete} busy={busy} />;
          })}
        </div>
      )}
    </Panel>
  );
}

/* ---------- 仓储库存 (蔬菜 / 冷冻 / 包装盒) ---------- */
function StockRow({ d, daysLeft, onAdjust, onDelete, busy }){
  const isBusy = busy && busy.has(d.id);
  const isZero = d.qty === 0;
  const isLow  = !isZero && d.lowThreshold > 0 && d.qty <= d.lowThreshold;
  const color  = isZero ? 'var(--red)' : isLow ? 'var(--amber)' : undefined;
  const dlColor = daysLeft !== null && daysLeft <= 3 ? 'var(--amber)' : 'var(--text-quaternary)';
  return (
    <div className="row">
      <span className={'row__dot dot--' + (isZero ? 'high' : isLow ? 'mid' : 'low')} />
      <div className="row__main">
        <span className="row__name">{d.name}</span>
        {(daysLeft !== null || d.notes) && (
          <span className="row__sub">
            {daysLeft !== null && <span style={{ color:dlColor }}>约够 {daysLeft} 天</span>}
            {d.notes && <span>{d.notes}</span>}
          </span>
        )}
      </div>
      <div className="row__qty">
        <div className="qty-row">
          <button className="qty-btn" disabled={isBusy} onClick={()=>onAdjust(d, -1)}>−</button>
          <span className="row__amt" style={{ color, background:'transparent', borderColor:'transparent', padding:'0 3px', minWidth:28, textAlign:'center' }}>
            {d.qty}
          </span>
          <button className="qty-btn" disabled={isBusy} onClick={()=>onAdjust(d, 1)}>+</button>
          {d.unit && <span style={{ fontSize:'var(--text-2xs)', color:'var(--text-quaternary)', marginLeft:3 }}>{d.unit}</span>}
        </div>
        <div style={{ display:'flex', justifyContent:'flex-end', alignItems:'center', gap:6, marginTop:2 }}>
          <span className="row__cap">{d.updated}</span>
          <button className="del-btn" disabled={isBusy} onClick={()=>onDelete(d)}>删除</button>
        </div>
      </div>
    </div>
  );
}

function StockSection({ dataKey, apiPath, label, defaultUnit, busy, setBusy }){
  const items = window.APP_DATA[dataKey] || [];
  const [open, setOpen]     = React.useState(true);
  const [adding, setAdding] = React.useState(false);
  const [form, setForm]     = React.useState({ name:'', qty:'0', unit:defaultUnit, notes:'' });

  const alertN = items.filter(d => d.qty === 0 || (d.lowThreshold > 0 && d.qty <= d.lowThreshold)).length;

  const call = async (id, fn) => {
    if (!window.companionHost) return;
    setBusy(s => new Set([...s, id]));
    try { await fn(); }
    catch(e) { console.error(e); }
    finally { setBusy(s => { const n = new Set(s); n.delete(id); return n; }); }
  };

  const onAdjust = (d, delta) => {
    if (busy.has(d.id)) return;
    const newQty = Math.max(0, d.qty + delta);
    const actual = newQty - d.qty;
    if (actual !== 0 && window._logUsage) window._logUsage(dataKey, d.id, d.name, actual);
    call(d.id, () => window.companionHost.apiWrite('PUT', `${apiPath}/${d.id}`, { quantity: newQty }));
  };

  const onDelete = (d) => {
    if (busy.has(d.id)) return;
    if (!confirm(`删除「${d.name}」？`)) return;
    call(d.id, () => window.companionHost.apiWrite('DELETE', `${apiPath}/${d.id}`));
  };

  const onAdd = async () => {
    if (!form.name.trim() || !window.companionHost) return;
    try {
      await window.companionHost.apiWrite('POST', apiPath, {
        name: form.name.trim(), quantity: parseFloat(form.qty) || 0,
        unit: form.unit.trim(), notes: form.notes.trim() || null,
      });
      setAdding(false);
      setForm({ name:'', qty:'0', unit:defaultUnit, notes:'' });
    } catch(e) { console.error(e); }
  };

  return (
    <div>
      <div className="sec" style={{ cursor:'default' }}>
        <span style={{ cursor:'pointer', userSelect:'none', display:'flex', alignItems:'center', gap:4 }}
          onClick={()=>{ setOpen(o=>!o); if(!open) setAdding(false); }}>
          <span style={{ fontFamily:'var(--type-readout)', fontSize:9, color:'var(--text-quaternary)', lineHeight:1 }}>
            {open ? '▾' : '▸'}
          </span>
          {label}
          {alertN > 0 && <span style={{ fontSize:6, padding:'1px 4px', background:'color-mix(in oklab,var(--amber) 20%,transparent)', color:'var(--amber)', border:'1px solid var(--amber)', fontFamily:'var(--type-ui)' }}>{alertN}项告警</span>}
          {items.length > 0 && <span style={{ fontSize:'var(--text-2xs)', color:'var(--text-quaternary)', fontFamily:'var(--type-ui)' }}>({items.length})</span>}
        </span>
        {open && (
          <button className="del-btn" style={{ marginLeft:'auto', borderColor:'transparent', color:'var(--accent)', padding:'0 3px' }}
            onClick={()=>setAdding(a=>!a)}>{adding ? '收起' : '＋新增'}</button>
        )}
      </div>
      {open && adding && (
        <div className="add-form" style={{ marginBottom:2 }}>
          <input className="add-input" placeholder="名称*" value={form.name}
            onChange={e=>setForm(f=>({...f,name:e.target.value}))} />
          <div className="add-row">
            <input className="add-input" placeholder="数量" type="number" min="0" value={form.qty}
              style={{flex:1}} onChange={e=>setForm(f=>({...f,qty:e.target.value}))} />
            <input className="add-input" placeholder="单位" value={form.unit}
              style={{width:54}} onChange={e=>setForm(f=>({...f,unit:e.target.value}))} />
          </div>
          <input className="add-input" placeholder="备注（可选）" value={form.notes}
            onChange={e=>setForm(f=>({...f,notes:e.target.value}))} />
          <div className="add-actions">
            <button className="del-btn"
              onClick={()=>{setAdding(false);setForm({name:'',qty:'0',unit:defaultUnit,notes:''});}}>取消</button>
            <Button variant="primary" size="sm" disabled={!form.name.trim()} onClick={onAdd}>确认添加</Button>
          </div>
        </div>
      )}
      {open && (items.length === 0 && !adding
        ? <div style={{ padding:'3px 0 6px', fontFamily:'var(--type-ui)', fontSize:'var(--text-2xs)', color:'var(--text-quaternary)' }}>暂无数据</div>
        : items.map((d,i) => {
            const dl = window._daysLeft ? window._daysLeft(dataKey, d.id, d.qty) : null;
            return <StockRow key={d.id||i} d={d} daysLeft={dl} busy={busy} onAdjust={onAdjust} onDelete={onDelete} />;
          })
      )}
    </div>
  );
}

function StockPanel(){
  const [busy, setBusy] = React.useState(new Set());
  const allItems = [
    ...(window.APP_DATA.vege || []),
    ...(window.APP_DATA.frozen || []),
    ...(window.APP_DATA.packaging || []),
  ];
  const zeroItems = allItems.filter(d => d.qty === 0);
  const lowItems  = allItems.filter(d => d.qty > 0 && d.lowThreshold > 0 && d.qty <= d.lowThreshold);
  const alertN    = zeroItems.length + lowItems.length;

  return (
    <Panel title="仓储库存" icon="folder" tone="accent" tight
      actions={alertN > 0
        ? <Badge tone={zeroItems.length ? 'danger' : 'warn'} dot>{alertN} 项告警</Badge>
        : <Tag tone="active">正常</Tag>}>
      {zeroItems.length > 0 && (
        <div className="alert-bann alert-bann--red">
          ⚠ 库存归零：{zeroItems.map(d=>d.name).join('、')}
        </div>
      )}
      {lowItems.length > 0 && (
        <div className="alert-bann alert-bann--amb">
          ⚡ 库存偏低：{lowItems.map(d=>d.name).join('、')}
        </div>
      )}
      <div style={{ padding:'var(--sp-1)' }}>
        <StockSection dataKey="vege"      apiPath="/api/sushi/vege"      label="蔬菜"  defaultUnit="kg" busy={busy} setBusy={setBusy} />
        <StockSection dataKey="frozen"    apiPath="/api/sushi/frozen"    label="冷冻"  defaultUnit="kg" busy={busy} setBusy={setBusy} />
        <StockSection dataKey="packaging" apiPath="/api/sushi/packaging" label="包装盒" defaultUnit="个" busy={busy} setBusy={setBusy} />
      </div>
    </Panel>
  );
}

window.OrdersPanel    = OrdersPanel;
window.InventoryPanel = InventoryPanel;
window.DeliveryPanel  = DeliveryPanel;
window.DrinkPanel     = DrinkPanel;
window.StockPanel     = StockPanel;
window.StatusPanel    = StatusPanel;
