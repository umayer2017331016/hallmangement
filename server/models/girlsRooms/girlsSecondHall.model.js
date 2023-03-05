const mongoose = require('mongoose');

const girlsSecondHallSchema = new mongoose.Schema({
    personNo: { type: Number, required: true },
    roomNo: { type: Number, required: true },
    isStatus: { type: Boolean, default: false }
});

module.exports = mongoose.model('girlsSecondHall', girlsSecondHallSchema);
