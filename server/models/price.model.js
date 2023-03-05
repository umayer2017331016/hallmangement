const mongoose = require('mongoose');

const PriceSchema = new mongoose.Schema({
    ThirdHall: { type: Number, required: true },
    SecondHall: { type: Number, required: true },
    FirstHall: { type: Number, required: true },
    foodPackage: { type: Number, required: true },
    // electricityBillPerUnit: { type: Number, required: true },
    // securityDeposit: { type: Number, required: true }
});

module.exports = mongoose.model('Price', PriceSchema);
