/* ============================================================
   desktop.jsx — 虚拟桌面外壳：顶部菜单栏 + 被监测的「寿司订货系统」窗口
   导出到 window: MenuBar, MonitoredSite
   ============================================================ */
const _DS = window.GuimarEsPixelDesignSystem_2bf0cf;
const { Icon: DIcon, Badge: DBadge } = _DS;

function useClock() {
  const { useState, useEffect } = React;
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000 * 20);
    return () => clearInterval(t);
  }, []);
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const days = ['日', '一', '二', '三', '四', '五', '六'];
  return `周${days[now.getDay()]} ${hh}:${mm}`;
}

function MenuBar({ agent }) {
  const clock = useClock();
  return (
    <div className="gx-menubar">
      <div className="gx-menubar__left">
        <span className="gx-menubar__brand"><DIcon name="gamepad" size={14} /> {agent.name}</span>
        <span className="gx-menubar__item">文件</span>
        <span className="gx-menubar__item">监测</span>
        <span className="gx-menubar__item">订货</span>
        <span className="gx-menubar__item">帮助</span>
      </div>
      <div className="gx-menubar__right">
        <DBadge tone="active" pulse>特工在岗</DBadge>
        <DIcon name="dashboard" size={14} color="var(--text-60)" />
        <DIcon name="battery-charging" size={14} color="var(--green)" />
        <span className="gx-menubar__clock">{clock}</span>
      </div>
    </div>
  );
}

function MonitoredSite({ data, dim }) {
  const { site, inventory } = data;
  return (
    <div className={'gx-site' + (dim ? ' is-dim' : '')}>
      {/* 窗口标题栏 */}
      <div className="gx-site__bar">
        <span className="gx-site__lights">
          <i className="l1" /><i className="l2" /><i className="l3" />
        </span>
        <div className="gx-site__url pixel-inset">
          <DIcon name="lock" size={11} color="var(--text-60)" />
          <span>{site.url}</span>
        </div>
        <span className="gx-site__reload"><DIcon name="reload" size={13} color="var(--text-60)" /></span>
      </div>

      {/* 站点内容 */}
      <div className="gx-site__body scanlines">
        <div className="gx-site__head">
          <div className="gx-site__title">
            <DIcon name="server" size={16} color="var(--green)" />
            <b>{site.name}</b>
            <span className="gx-site__crumb">/ orders · 库存总览</span>
          </div>
          <DBadge tone="warn">{site.skuLow} 项需补货</DBadge>
        </div>

        <table className="gx-table">
          <thead>
            <tr><th>SKU</th><th>商品</th><th>当前</th><th>安全</th><th>状态</th></tr>
          </thead>
          <tbody>
            {inventory.map(r => (
              <tr key={r.sku} className={r.low ? 'is-low' : ''}>
                <td className="mono">{r.sku}</td>
                <td>{r.name}</td>
                <td className="mono">{r.stock}{r.unit}</td>
                <td className="mono dim">{r.safe}{r.unit}</td>
                <td>
                  {r.low
                    ? <span className="gx-pill gx-pill--low">需补货</span>
                    : <span className="gx-pill gx-pill--ok">充足</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

Object.assign(window, { MenuBar, MonitoredSite });
