const girlsFirstHall = require('../models/girlsRooms/girlsFirstHall.model');
const girlsSecondHall = require('../models/girlsRooms/girlsSecondHall.model');
const girlsThirdHall = require('../models/girlsRooms/girlsThirdHall.model');

async function FirstHallAvailability() {
    let total = await girlsFirstHall.find({ isStatus: { $eq: false } });
    return total;
}

async function SecondHallAvailability() {
    let total = await girlsSecondHall.find({ isStatus: { $eq: false } });
    return total;
}

async function ThirdHallAvailability() {
    let total = await girlsThirdHall.find({ isStatus: { $eq: false } });
    return total;
}

async function updateFirstHall(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await girlsFirstHall.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateSecondHall(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await girlsSecondHall.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateThirdHall(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await girlsThirdHall.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

module.exports = {
    FirstHallAvailability,
    SecondHallAvailability,
    ThirdHallAvailability,
    updateFirstHall,
    updateSecondHall,
    updateThirdHall
};