const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const boysRoomsController = require('../controllers/boysRooms.controller');

router.get('/FirstHallRooms', asyncHandler(FirstHallAvailability), total);
router.get('/SecondHallRooms', asyncHandler(SecondHallAvailability), total);
router.get('/ThirdHallRooms', asyncHandler(ThirdHallAvailability), total);

async function FirstHallAvailability(req, res, next) {
    req.total = await boysRoomsController.FirstHallAvailability();
    next();
}

async function SecondHallAvailability(req, res, next) {
    req.total = await boysRoomsController.SecondHallAvailability();
    next();
}

async function ThirdHallAvailability(req, res, next) {
    req.total = await boysRoomsController.ThirdHallAvailability();
    next();
}

function total(req, res) {
    let total = req.total;
    res.json({ 
        total
    });
}

module.exports = router;

