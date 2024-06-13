class FoodTruck {
  constructor(locationId, name, type, address, foodItems, permitStatus, locationDescription) {
    this.locationId = locationId;  
    this.name = name;
    this.type = type;
    this.address = address;
    this.foodItems = foodItems;
    this.permitStatus = permitStatus;
    this.locationDescription = locationDescription;
  }
}

module.exports = FoodTruck;