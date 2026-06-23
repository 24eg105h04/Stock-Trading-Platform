import { useEffect, useState } from "react";
import API from "./api";

function Portfolio() {
  const [portfolio, setPortfolio] = useState(null);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    API.get(`/portfolio/${userId}`)
      .then((res) => {
        setPortfolio(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  if (!portfolio) {
    return <h2>Loading Portfolio...</h2>;
  }

  const totalInvestment = portfolio.stocks.reduce(
    (total, stock) => total + stock.quantity * stock.avgPrice,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>💼 My Portfolio</h2>

      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "20px",
          border: "1px solid #ddd"
        }}
      >
        <h3>Total Investment: ₹{totalInvestment}</h3>
      </div>

      {portfolio.stocks.length === 0 ? (
        <p>No stocks found</p>
      ) : (
        portfolio.stocks.map((stock, index) => (
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
              <strong>Quantity:</strong> {stock.quantity}
            </p>

            <p>
              <strong>Average Price:</strong> ₹{stock.avgPrice}
            </p>

            <p>
              <strong>Investment Value:</strong> ₹
              {stock.quantity * stock.avgPrice}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Portfolio;