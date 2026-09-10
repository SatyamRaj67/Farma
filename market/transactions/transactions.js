const transaction_data = [
  {
    id: 1,
    type: "Buy",
    stock: "Apple",
    shares: 10,
    price: 1.50,
    date: "2024-01-05",
    status: "COMPLETED",
  },
  {
    id: 2,
    type: "Buy",
    stock: "Mango",
    shares: 5,
    price: 2.00,
    date: "2024-01-08",
    status: "CANCELLED",
  },
  {
    id: 3,
    type: "Sell",
    stock: "Apple",
    shares: 4,
    price: 1.58,
    date: "2024-01-10",
    status: "COMPLETED",
  },
  {
    id: 4,
    type: "Buy",
    stock: "Tomato",
    shares: 3,
    price: 0.85,
    date: "2024-01-12",
    status: "COMPLETED",
  },
  {
    id: 5,
    type: "Buy",
    stock: "Nectarine",
    shares: 2,
    price: 1.20,
    date: "2024-01-16",
    status: "COMPLETED",
  },
  {
    id: 6,
    type: "Sell",
    stock: "Tomato",
    shares: 1,
    price: 0.90,
    date: "2024-01-18",
    status: "COMPLETED",
  },
  {
    id: 7,
    type: "Buy",
    stock: "Avocado",
    shares: 6,
    price: 2.50,
    date: "2024-01-22",
    status: "COMPLETED",
  },
  {
    id: 8,
    type: "Sell",
    stock: "Mango",
    shares: 2,
    price: 2.10,
    date: "2024-01-26",
    status: "PENDING",
  },
  {
    id: 9,
    type: "Buy",
    stock: "Grape",
    shares: 3,
    price: 3.00,
    date: "2024-02-01",
    status: "COMPLETED",
  },
  {
    id: 10,
    type: "Sell",
    stock: "Nectarine",
    shares: 1,
    price: 1.30,
    date: "2024-02-03",
    status: "COMPLETED",
  },
  {
    id: 11,
    type: "Buy",
    stock: "Melon",
    shares: 4,
    price: 4.00,
    date: "2024-02-06",
    status: "COMPLETED",
  },
  {
    id: 12,
    type: "Buy",
    stock: "Onion",
    shares: 2,
    price: 0.50,
    date: "2024-02-08",
    status: "PENDING",
  },
  {
    id: 13,
    type: "Sell",
    stock: "Apple",
    shares: 3,
    price: 1.61,
    date: "2024-02-12",
    status: "COMPLETED",
  },
  {
    id: 14,
    type: "Buy",
    stock: "Asparagus",
    shares: 7,
    price: 3.50,
    date: "2024-02-14",
    status: "COMPLETED",
  },
  {
    id: 15,
    type: "Buy",
    stock: "Iceberg Lettuce",
    shares: 12,
    price: 1.80,
    date: "2024-02-16",
    status: "CANCELLED",
  },
  {
    id: 16,
    type: "Sell",
    stock: "Avocado",
    shares: 2,
    price: 2.60,
    date: "2024-02-20",
    status: "COMPLETED",
  },
  {
    id: 17,
    type: "Buy",
    stock: "Tomato",
    shares: 2,
    price: 0.75,
    date: "2024-02-22",
    status: "PENDING",
  },
  {
    id: 18,
    type: "Buy",
    stock: "Spinach",
    shares: 5,
    price: 2.20,
    date: "2024-02-26",
    status: "COMPLETED",
  },
  {
    id: 19,
    type: "Sell",
    stock: "Mango",
    shares: 1,
    price: 2.15,
    date: "2024-02-28",
    status: "COMPLETED",
  },
  {
    id: 20,
    type: "Buy",
    stock: "Quince",
    shares: 3,
    price: 1.00,
    date: "2024-03-01",
    status: "COMPLETED",
  },
  {
    id: 21,
    type: "Buy",
    stock: "Jalapeno",
    shares: 6,
    price: 0.21,
    date: "2024-03-04",
    status: "COMPLETED",
  },
  {
    id: 22,
    type: "Sell",
    stock: "Grape",
    shares: 1,
    price: 3.10,
    date: "2024-03-06",
    status: "CANCELLED",
  },
  {
    id: 23,
    type: "Buy",
    stock: "Date",
    shares: 8,
    price: 5.00,
    date: "2024-03-08",
    status: "COMPLETED",
  },
  {
    id: 24,
    type: "Sell",
    stock: "Melon",
    shares: 2,
    price: 4.20,
    date: "2024-03-12",
    status: "PENDING",
  },
];

const tbody = document.querySelector("tbody");

function getTypeColor(type) {
  switch (type.toUpperCase()) {
    case "BUY":
      return "green";
    case "SELL":
      return "red";
    default:
      return "gray";
  }
}

function getStatusColor(status) {
  switch (status.toUpperCase()) {
    case "COMPLETED":
      return "green";
    case "PENDING":
      return "yellow";
    case "CANCELLED":
      return "red";
    default:
      return "gray";
  }
}

const fragment = document.createDocumentFragment();
transaction_data.forEach((transaction) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td data-label="ID">${transaction.id}</td>
      <td data-label="TYPE"><div class="badge" 
      data-color="${getTypeColor(transaction.type)}">
      ${transaction.type}</div></td>
      <td data-label="STOCK">${transaction.stock}</td>
      <td data-label="SHARES">${transaction.shares}</td>
      <td data-label="PRICE">${transaction.price}</td>
      <td data-label="TOTAL">${transaction.price * transaction.shares}</td>
      <td data-label="DATE">${transaction.date}</td>
      <td data-label="STATUS"><div class="badge"
      data-color="${getStatusColor(transaction.status)}">
      ${transaction.status}
      </div></td>
    `;
  fragment.appendChild(tr);
});

tbody.appendChild(fragment);
