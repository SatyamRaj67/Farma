const market_data = [
  {
    symbol: "APPL",
    name: "Apple",
    price: 1.50,
    change: +0.01,
    change_percent: +0.79,
    market_cap: "2.5M",
    volume: "75K",
    href: "APPL/index.html",
  },
  {
    symbol: "MGO",
    name: "Mango",
    price: 2.00,
    change: -0.01,
    change_percent: -0.52,
    market_cap: "1.9M",
    volume: "30K",
    href: "MGO/index.html",
  },
  {
    symbol: "GRP",
    name: "Grape",
    price: 3.00,
    change: +0.02,
    change_percent: +0.61,
    market_cap: "1.4M",
    volume: "20K",
    href: "GRP/index.html",
  },
  {
    symbol: "AVO",
    name: "Avocado",
    price: 2.50,
    change: +0.05,
    change_percent: +2.08,
    market_cap: "1.6M",
    volume: "25K",
    href: "AVO/index.html",
  },
  {
    symbol: "NEC",
    name: "Nectarine",
    price: 1.20,
    change: +0.02,
    change_percent: +1.87,
    market_cap: "1.0M",
    volume: "50K",
    href: "NEC/index.html",
  },
];

(() => {
  const tableBody = document.querySelector("table tbody");
  const fragment = document.createDocumentFragment();

  market_data.forEach((stock) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td data-label="Stock">${stock.symbol}</td>
      <td data-label="Price">${stock.price}</td>
      <td data-label="24H Change" style="color: ${stock.change >= 0
        ? "oklch(72.276% 0.19199 149.6)"
        : "oklch(63.681% 0.20784 25.315)"
      };">${stock.change >= 0 ? "+▲" : "-▼"}${Math.abs(
        stock.change,
      )} (${Math.abs(stock.change_percent)}%)</td>
      <td data-label="Market Cap">${stock.market_cap}</td>
      <td data-label="Volume">${stock.volume}</td>
      <td data-label="Trade"><a href="${stock.href}">Trade</a></td>
    `;

    fragment.appendChild(row);
  });

  tableBody.appendChild(fragment);
})();
