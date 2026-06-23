const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// ✅ Create app FIRST (very important)
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ------------------- TEST ROUTE -------------------
app.get("/", (req, res) => {
    res.send("Stock Trading Backend Running");
});

// ------------------- ROUTES -------------------
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/stocks", require("./routes/stockRoutes"));
app.use("/api/transactions", require("./routes/transactionRoutes"));
app.use("/api/portfolio", require("./routes/portfolioRoutes"));

// ------------------- DATABASE CONNECTION -------------------
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");

    app.listen(process.env.PORT || 5000, () => {
        console.log("Server running on port " + (process.env.PORT || 5000));
    });
})
.catch((err) => {
    console.log("DB Error:", err);
});