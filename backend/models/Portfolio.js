const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    stocks: [
        {
            symbol: String,
            quantity: Number,
            avgPrice: Number
        }
    ]
});

module.exports = mongoose.model("Portfolio", portfolioSchema);