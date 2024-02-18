const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  propertyType: { type: String },
  images: { type: [String] },
  price: { type: String },
  propertyName: { type: String },
  description: { type: String },
  bedrooms: { type: String },
  bathrooms: { type: String },
  garage: { type: String },
  squareFeet: { type: String },
  propertyCategory: { type: String },
  address: { type: String },
  floorNumber: { type: String },
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
