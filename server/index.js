const express = require("express");
const app = express();
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

app.listen(port, () => console.log(`Server is running on port ${port}`));
