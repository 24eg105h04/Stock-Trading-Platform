import { useEffect, useState } from "react";
import API from "./api";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    API.get(`/transactions/${userId}`)
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📜 Transaction History</h2>

      {transactions.length === 0 ? (
        <p>No transactions found</p>
      ) : (
        transactions.map((t) => (
          <div
            key={t._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "15px",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
              backgroundColor:
                t.type === "BUY" ? "#e8f5e9" : "#ffebee"
            }}
          >
            <h3
              style={{
                color:
                  t.type === "BUY"
                    ? "green"
                    : "red"
              }}
            >
              {t.type}
            </h3>

            <p>
              <strong>Stock:</strong> {t.stock}
            </p>

            <p>
              <strong>Quantity:</strong> {t.quantity}
            </p>

            <p>
              <strong>Price:</strong> ₹{t.price}
            </p>

            <p>
              <strong>Total Value:</strong> ₹
              {t.quantity * t.price}
            </p>

            <p>
              <strong>Date:</strong>{" "}
              {new Date(t.timestamp).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Transactions;