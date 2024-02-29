const Property = require("../models/PropertyScema");
const User = require("../models/userModel");

exports.createProperty = async (req, res) => {
  // Logic for creating a new property
  const {
    propertyType,
    price,
    propertyName,
    description,
    bedrooms,
    bathrooms,
    garage,
    squareFeet,
    propertyCategory,
    address,
    floorNumber,
  } = req.body;

  const imagePath = req.files.map((file) => file.path);

  try {
    const property = new Property({
      propertyType,
      images: imagePath,
      price,
      propertyName,
      description,
      bedrooms,
      bathrooms,
      garage,
      squareFeet,
      propertyCategory,
      address,
      floorNumber,
    });

    await property.save();
    res
      .status(201)
      .json({ message: "Property created successfully", property: property });
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: err.message });
  }
};

exports.getAllProperties = async (req, res) => {
  // Logic for getting all properties
  try {
    const properties = await Property.find();
    // console.log(req.user);
    // console.log(properties);
    // res.status(200).json({ properties, userInfo: req.user });
    res.status(200).json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getSingleProperty = async (req, res) => {
  // Logic for getting a single property by ID
  try {
    const property = await Property.findById(req.params.id);
    res.status(200).json(property);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteProperty = async (req, res) => {
  // Logic for deleting a property by ID
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    res.status(200).json(property);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateProperty = async (req, res) => {
  // Logic for updating a property by ID
  const {
    propertyType,
    price,
    propertyName,
    description,
    bedrooms,
    bathrooms,
    garage,
    squareFeet,
    propertyCategory,
    address,
    floorNumber,
  } = req.body;

  const imagePath = req.files.map((file) => file.path);

  try {
    const property = await Property.findByIdAndUpdate(req.params.id, {
      propertyType,
      images: imagePath,
      price,
      propertyName,
      description,
      bedrooms,
      bathrooms,
      garage,
      squareFeet,
      propertyCategory,
      address,
      floorNumber,
    });

    res
      .status(201)
      .json({ message: "Property Updated successfully", property: property });
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: err.message });
  }
};
