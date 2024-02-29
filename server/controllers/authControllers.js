const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const createError = require("../utils/appError");

// REGISTER ERROR
exports.signup = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return next(new createError("User already exists", 400));
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    // Assign JWT (Json Web Token) to a user
    // const token = jwt.sign(
    //   {
    //     id: newUser._id,
    //   },
    //   process.env.JWT_SECRET,
    //   {
    //     expiresIn: process.env.JWT_EXPIRES_IN,
    //   }
    // );
    res.status(201).json({
      status: "success",
      message: "User created successfully",
      // token: token,
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        role: newUser.role,
        contact: newUser.contact,
        country: newUser.country,
        city: newUser.city,
        zipCode: newUser.zipCode,
        address: newUser.address,
      },
    });
  } catch (error) {
    next(error);
  }
};

// LOGGING USER
exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ email: username });

    if (!user) {
      return next(new createError("User not found", 404));
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return next(new createError("Incorrect password", 401));
    }
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET
      // {
      //   expiresIn: process.env.JWT_EXPIRES_IN,
      // }
    );
    res.status(201).json({
      status: "success",
      message: "User logged in successfully",
      token: token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        contact: user.contact,
        country: user.country,
        city: user.city,
        zipCode: user.zipCode,
        address: user.address,
      },
    });
  } catch (error) {
    next(error);
  }
};
