const express = require("express");
const router = express.Router();

const {
  buyStock,
  sellStock,
  getTransactions
} = require("../controllers/transactionController");

router.post("/buy", buyStock);
router.post("/sell", sellStock);

// GET USER TRANSACTIONS
router.get("/:userId", getTransactions);

module.exports = router;