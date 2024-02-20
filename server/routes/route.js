const express = require("express");
const multer = require("multer");
require("../db/conn");
// Add you Schema here
const Property = require("../models/PropertyScema");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Admin Panel API's <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Create Property API +++++++++++
router.post(
  "/api/createproperties",
  upload.array("images"),
  async (req, res) => {
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
  }
);
// Get All Properties API
router.get("/api/properties", async (req, res) => {
  try {
    const properties = await Property.find();
    // console.log(properties);
    res.status(200).json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});
// Get Single Property API
router.get(`/api/readproperty/:id`, async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    res.status(200).json(property);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});
// Delete Single Property API
router.delete(`/api/deleteproperty/:id`, async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    res.status(200).json(property);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});
// Update Single Property API
router.put(
  "/api/updateproperty/:id",
  upload.array("images"),
  async (req, res) => {
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
  }
);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Users API's <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// router.get("/", (req, res) => {
//   res.send("Hello this is my new project");
// });

module.exports = router;
