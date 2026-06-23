const Transaction = require("../models/Transaction");
const Portfolio = require("../models/Portfolio");


// ================= BUY STOCK =================
exports.buyStock = async (req, res) => {
    try {
        const { user, stock, quantity, price } = req.body;

        let portfolio = await Portfolio.findOne({ user });

        if (!portfolio) {
            portfolio = new Portfolio({ user, stocks: [] });
        }

        const existingStock = portfolio.stocks.find(
            (s) => s.symbol === stock
        );

        if (existingStock) {
            const totalQty = existingStock.quantity + quantity;
            const totalCost =
                (existingStock.quantity * existingStock.avgPrice) +
                (quantity * price);

            existingStock.quantity = totalQty;
            existingStock.avgPrice = totalCost / totalQty;
        } else {
            portfolio.stocks.push({
                symbol: stock,
                quantity,
                avgPrice: price
            });
        }

        await portfolio.save();

        await Transaction.create({
            user,
            stock,
            type: "BUY",
            quantity,
            price
        });

        res.json({
            message: "Stock Bought Successfully",
            portfolio
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// ================= SELL STOCK =================
exports.sellStock = async (req, res) => {
    try {
        const { user, stock, quantity, price } = req.body;

        let portfolio = await Portfolio.findOne({ user });

        if (!portfolio) {
            return res.status(404).json({ message: "Portfolio not found" });
        }

        const existingStock = portfolio.stocks.find(
            (s) => s.symbol === stock
        );

        if (!existingStock) {
            return res.status(404).json({ message: "Stock not found" });
        }

        if (existingStock.quantity < quantity) {
            return res.status(400).json({ message: "Not enough quantity" });
        }

        // reduce quantity
        existingStock.quantity -= quantity;

        // remove if zero
        if (existingStock.quantity === 0) {
            portfolio.stocks = portfolio.stocks.filter(
                (s) => s.symbol !== stock
            );
        }

        await portfolio.save();

        await Transaction.create({
            user,
            stock,
            type: "SELL",
            quantity,
            price
        });

        res.json({
            message: "Stock Sold Successfully",
            portfolio
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// GET ALL TRANSACTIONS OF A USER

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      user: req.params.userId
    });

    res.json(transactions);

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};