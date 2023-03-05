const Price =  require('../models/price.model');

async function getHallPriceDetails() {
    let priceDetails = await Price.findOne({});
    
    if(priceDetails) {
        priceDetails = priceDetails.toObject();
        return priceDetails;
    }
    else {
        return throwError;
    }   
}

async function updatePriceDetails(priceDetails) {
    return Price.updateOne(
        {  },
        {
            $set: {
                FirstHall: priceDetails.FirstHall,
                SecondHall: priceDetails.SecondHall,
                ThirdHall: priceDetails.ThirdHall,
                foodPackage: priceDetails.foodPackage,
                electricityBillPerUnit: priceDetails.electricityBillPerUnit,
                securityDeposit: priceDetails.securityDeposit
            }
        }
    );
}

module.exports = {
    getHallPriceDetails,
    updatePriceDetails
};