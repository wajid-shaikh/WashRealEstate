const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const isAuthenticated = async (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization?.split(" ")[1];
  // Check if token is present
  if (!token) {
    return res.status(401).json({
      error: "Unauthorized access - Token not provided",
      message: "invalidUser",
    });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // // Check if token has expired
    // const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds
    // if (decoded.exp <= currentTime) {
    //   return res.status(401).json({
    //     error: "Unauthorized access - Token has expired",
    //     message: "invalidUser",
    //   });
    // }

    // Check if user exists
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        error: "Unauthorized access - User not found",
        message: "invalidUser",
      });
    }

    // If user exists, authentication succeeds
    req.user = user; // Set user information in request object
    next(); // Proceed to the next middleware
  } catch (error) {
    return res.status(401).json({
      error: "Unauthorized access - Invalid token",
      message: "invalidUser",
    });
  }
};

module.exports = isAuthenticated;
