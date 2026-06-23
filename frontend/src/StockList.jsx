import API from "./api";

function StockList() {

  const user = localStorage.getItem("userId");

  const buyStock = (stock) => {
    API.post("/transactions/buy", {
      user,
      stock: stock.symbol,
      quantity: 1,
      price: stock.price
    })
      .then(() => {
        alert("Bought " + stock.symbol);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sellStock = (stock) => {
    API.post("/transactions/sell", {
      user,
      stock: stock.symbol,
      quantity: 1,
      price: stock.price
    })
      .then(() => {
        alert("Sold " + stock.symbol);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const stocks = [
    {
      symbol: "AAPL",
      companyName: "Apple Inc",
      price: 200
    },
    {
      symbol: "TSLA",
      companyName: "Tesla Inc",
      price: 800
    },
    {
      symbol: "INFY",
      companyName: "Infosys",
      price: 1500
    }
  ];

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>📊 Market Stocks</h2>

      {stocks.map((stock, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "15px",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h3>{stock.symbol}</h3>

          <p>
            <strong>Company:</strong> {stock.companyName}
          </p>

          <p>
            <strong>Price:</strong> ₹{stock.price}
          </p>

          <button
            onClick={() => buyStock(stock)}
            style={{
              backgroundColor: "green",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            BUY
          </button>

          <button
            onClick={() => sellStock(stock)}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "5px",
              marginLeft: "10px",
              cursor: "pointer"
            }}
          >
            SELL
          </button>
        </div>
      ))}
    </div>
  );
}

export default StockList;