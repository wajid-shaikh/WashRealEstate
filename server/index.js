const express = require("express");
const app = express();
const port = 8000;
require("./db/conn");
const cors = require("cors");
const Router = require("./routes/route");

app.use("/uploads", express.static("uploads"));

// Allow requests from washrealestate.vercel.app
const corsOptions = {
  origin: "https://washrealestate.vercel.app",
};

// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(Router);
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Server is running on port ${port}`));
