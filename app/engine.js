/* ============================================================
   REORDER ENGINE — 订货判断逻辑(纯函数, 可单测)
   输入: window.APP_DATA (inventory + suppliers + context)
   输出: { rows, tomorrow[], week[], later[], okCount }
   ------------------------------------------------------------
   核心模型(订货点法 + 在途天数):
     daysLeft = 当前库存 / 日均用量            还能撑几天
     nextDelivery = 供应商下一趟车在几天后      赶得上哪天
     需要订货 if  库存 <= 订货点(par)
              or  daysLeft <= 提前期 + 安全缓冲   (会断货)
     分桶:  供应商明天来车 -> 明天订(今天截单)
            本周还有车     -> 本周补货
            本周无车       -> 待排期
     建议量 = 补到 (订货点 × 1.5) 的整数差额
   ============================================================ */
window.REORDER = (function () {
  const SAFETY_DAYS = 2;          // 安全缓冲天数(经理可调)
  const TARGET_MULT = 1.5;        // 补货目标 = par × 此倍数

  function nextDeliveryIn(days, todayWd) {
    if (!days || !days.length) return null;
    for (let d = 1; d <= 7; d++) {
      const wd = (todayWd + d) % 7;
      if (days.includes(wd)) return { in: d, wd };
    }
    return null;
  }

  function compute(data) {
    const D = data || window.APP_DATA;
    const todayWd = D.context.todayWd;

    const rows = D.inventory.map((it) => {
      const s = D.suppliers[it.supplier] || { days: [], lead: 1 };
      const daysLeft = it.dailyUse > 0 ? it.qty / it.dailyUse : 999;
      const lead = s.lead || 1;
      const nd = nextDeliveryIn(s.days, todayWd);
      const belowPar = it.qty <= it.par;
      const willStockOut = daysLeft <= lead + SAFETY_DAYS;
      const need = belowPar || willStockOut;

      // 紧急度
      let urgency = 'low';
      if (it.qty <= it.par * 0.5 || daysLeft <= lead + 1) urgency = 'high';
      else if (belowPar) urgency = 'mid';

      // 建议订货量(补到 par×倍数)
      const target = Math.ceil(it.par * TARGET_MULT);
      const suggQty = Math.max(1, target - Math.round(it.qty));

      // 原因短语
      let reason;
      if (it.qty <= it.par * 0.5) reason = `仅剩 ${it.qty}${it.unit}·低于订货点 ${it.par}`;
      else if (belowPar) reason = `${it.qty}${it.unit} 低于订货点 ${it.par}`;
      else reason = `约够 ${Math.round(daysLeft)} 天·将断档`;

      return { ...it, s, daysLeft, lead, nd, belowPar, need, urgency, suggQty, target, reason };
    });

    const needRows = rows.filter((r) => r.need)
      .sort((a, b) => ({ high: 0, mid: 1, low: 2 }[a.urgency] - { high: 0, mid: 1, low: 2 }[b.urgency]));

    const tomorrow = needRows.filter((r) => r.nd && r.nd.in === 1);
    const week     = needRows.filter((r) => r.nd && r.nd.in > 1 && r.nd.in <= 6);
    const later    = needRows.filter((r) => !r.nd || r.nd.in > 6);
    const okCount  = rows.length - needRows.length;

    return { rows, needRows, tomorrow, week, later, okCount, todayWd };
  }

  return { compute, nextDeliveryIn };
})();
