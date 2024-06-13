const fs = require('fs');
const csv = require('csv-parser');
const FoodTruck = require('../model/foodtruck');

module.exports = {
  readCSVFile: (filePath) => {
    //console.log("inside helper");
    return new Promise((resolve, reject) => {
      const foodTrucks = [];
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
          const { locationid, Applicant, FacilityType, Address, FoodItems, Status, LocationDescription } = row;
          foodTrucks.push(new FoodTruck(locationid, Applicant, FacilityType, Address, FoodItems, Status, LocationDescription));
          //foodTrucks.push(row);
        })
        .on('end', () => {
          resolve(foodTrucks);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }
};