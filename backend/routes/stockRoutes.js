const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json([{ symbol: "AAPL", price: 200 }]);
});

module.exports = router;