const express = require("express");
const router = express.Router();
const Portfolio = require("../models/Portfolio");

// GET portfolio by user ID
router.get("/:userId", async (req, res) => {
    try {
        const portfolio = await Portfolio.findOne({
            user: req.params.userId
        });

        if (!portfolio) {
            return res.json({
                user: req.params.userId,
                stocks: []
            });
        }

        res.json(portfolio);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;