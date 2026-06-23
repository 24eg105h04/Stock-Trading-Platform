const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["BUY", "SELL"],
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Transaction", transactionSchema);