const boysFirstHall = require('../models/boysRooms/boysFirstHall.model');
const boysSecondHall = require('../models/boysRooms/boysSecondHall.model');
const boysThirdHall = require('../models/boysRooms/boysThirdHall.model');


async function FirstHallAvailability() {
    let total = await boysFirstHall.find({ isStatus: { $eq: false } });
    // console.log(total);
    return total;
}

async function SecondHallAvailability() {
    let total = await boysSecondHall.find({ isStatus: { $eq: false } });
    return total;
}

async function ThirdHallAvailability() {
    let total = await boysThirdHall.find({ isStatus: { $eq: false } });
    return total;
}

async function updateFirstHall(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;

    return await boysFirstHall.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateSecondHall(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await boysSecondHall.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateThirdHall(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await boysThirdHall.updateOne(
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