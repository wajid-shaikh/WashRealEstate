const express = require("express");
const multer = require("multer");
require("../db/conn");
const propertyController = require("../controllers/propertyController");
const router = express.Router();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Image upload by Multer <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
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

router.post(
  "/api/createproperties",
  upload.array("images"),
  propertyController.createProperty
);

router.get("/api/properties", propertyController.getAllProperties);

router.get(`/api/readproperty/:id`, propertyController.getSingleProperty);

router.delete(`/api/deleteproperty/:id`, propertyController.deleteProperty);

router.put(
  "/api/updateproperty/:id",
  upload.array("images"),
  propertyController.updateProperty
);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Users API's <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

module.exports = router;
