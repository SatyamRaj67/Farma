const stock_data = [
  { ticker: "APPL", name: "Apple", price: 1.50, change: "+1.2%" },
  { ticker: "MGO", name: "Mango", price: 2.00, change: "-0.4%" },
  { ticker: "GRP", name: "Grape", price: 3.00, change: "+0.8%" },
  { ticker: "AVO", name: "Avocado", price: 2.50, change: "+0.3%" },
  { ticker: "TOM", name: "Tomato", price: 0.85, change: "-1.1%" },
  { ticker: "NEC", name: "Nectarine", price: 1.20, change: "+2.5%" },
  { ticker: "MEL", name: "Melon", price: 4.00, change: "+0.6%" },
  { ticker: "NUT", name: "Walnut", price: 6.50, change: "-0.7%" },
  { ticker: "JAL", name: "Jalapeno", price: 0.20, change: "+0.2%" },
  { ticker: "VAN", name: "Vanilla Bean", price: 8.50, change: "+0.9%" },
  { ticker: "DAT", name: "Date", price: 5.00, change: "-0.2%" },
];

const watchlist = document.getElementById("watchlist");
if (!watchlist) throw new Error("Watchlist element not found");

stock_data.forEach((stock) => {
  const li = document.createElement("li");

  li.style.setProperty("--i", stock_data.indexOf(stock));

  li.innerHTML = `
      <div class="symbol">
        <h2>${stock.ticker}</h2>
        <p>${stock.name}</p>
      </div>
      <div class="prices">
        <h2>$${stock.price.toFixed(2)}</h2>
        <p class="${stock.change.startsWith("+") ? "up" : "down"}">${stock.change
    }</p>
      </div>
    `;
  watchlist.appendChild(li);
});
