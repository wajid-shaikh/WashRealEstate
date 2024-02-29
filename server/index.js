const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const port = 8000;
require("./db/conn");
const cors = require("cors");
const Router = require("./routes/route");

app.use("/uploads", express.static("uploads"));

// middlewares
app.use(cors());
app.use(express.json());
app.use(Router);
app.use(express.urlencoded({ extended: false }));

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
