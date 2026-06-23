import { useEffect, useState } from "react";
import API from "./api";

function Dashboard() {
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
    return <h2>Loading Dashboard...</h2>;
  }

  const totalStocks = portfolio.stocks.length;

  const totalQuantity = portfolio.stocks.reduce(
    (sum, stock) => sum + stock.quantity,
    0
  );

  const totalInvestment = portfolio.stocks.reduce(
    (sum, stock) => sum + stock.quantity * stock.avgPrice,
    0
  );

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "20px",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          flex: 1,
          minWidth: "200px",
          padding: "20px",
          backgroundColor: "#4caf50",
          color: "white",
          borderRadius: "10px",
        }}
      >
        <h3>Total Stocks</h3>
        <h1>{totalStocks}</h1>
      </div>

      <div
        style={{
          flex: 1,
          minWidth: "200px",
          padding: "20px",
          backgroundColor: "#2196f3",
          color: "white",
          borderRadius: "10px",
        }}
      >
        <h3>Total Quantity</h3>
        <h1>{totalQuantity}</h1>
      </div>

      <div
        style={{
          flex: 1,
          minWidth: "200px",
          padding: "20px",
          backgroundColor: "#ff9800",
          color: "white",
          borderRadius: "10px",
        }}
      >
        <h3>Total Investment</h3>
        <h1>₹{totalInvestment}</h1>
      </div>
    </div>
  );
}

export default Dashboard;