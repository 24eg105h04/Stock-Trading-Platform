import { useState, useEffect } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Trade from "./Trade";
import StockList from "./StockList";
import Portfolio from "./Portfolio";
import Transactions from "./Transactions";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("userId");

    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    setUser(null);
  };

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1>📈 Stock Trading Platform</h1>

        <button
          onClick={logout}
          style={{
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      <Dashboard />

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Trade />
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <StockList />
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Portfolio />
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Transactions />
      </div>
    </div>
  );
}

export default App;