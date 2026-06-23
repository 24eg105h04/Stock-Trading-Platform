import { useState } from "react";
import API from "./api";

function Trade() {
  const [stock, setStock] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const user = localStorage.getItem("userId");

  const buyStock = async () => {
    try {
      const res = await API.post("/transactions/buy", {
        user,
        stock,
        quantity: Number(quantity),
        price: Number(price),
      });

      alert(res.data.message);

      setStock("");
      setQuantity("");
      setPrice("");

      window.location.reload();
    } catch (err) {
      alert(err.response?.data?.error || "Buy failed");
    }
  };

  const sellStock = async () => {
    try {
      const res = await API.post("/transactions/sell", {
        user,
        stock,
        quantity: Number(quantity),
        price: Number(price),
      });

      alert(res.data.message);

      setStock("");
      setQuantity("");
      setPrice("");

      window.location.reload();
    } catch (err) {
      alert(err.response?.data?.error || "Sell failed");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2>💹 Trade Stocks</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          placeholder="Stock Symbol (AAPL)"
          value={stock}
          onChange={(e) => setStock(e.target.value.toUpperCase())}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          placeholder="Quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
          }}
        />
      </div>

      <div style={{ marginTop: "15px" }}>
        <button
          onClick={buyStock}
          style={{
            backgroundColor: "green",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          BUY
        </button>

        <button
          onClick={sellStock}
          style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          SELL
        </button>
      </div>
    </div>
  );
}

export default Trade;