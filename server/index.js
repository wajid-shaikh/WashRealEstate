const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const port = 8000;
require("./db/conn");
const cors = require("cors");
const Router = require("./routes/route");

app.use("/uploads", express.static("uploads"));

// // Increase payload size limit (e.g., 10MB)
// app.use(bodyParser.json({ limit: "10mb" }));
// app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

// // Allow requests from washrealestate.vercel.app
// const corsOptions = {
//   origin: "https://washrealestate.vercel.app",
// };

// middlewares
app.use(cors());
app.use(express.json());
app.use(Router);
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Server is running on port ${port}`));
