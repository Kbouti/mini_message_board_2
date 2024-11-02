const express = require("express");
const app = express();

// Configure view engine
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Configure static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Configure .env file
require("dotenv").config();

// Configure yrlencoded middleware to allow access to form submission req.body
app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/indexRouter");
// app.get("/", (req, res) => res.send("Hello, world!"));
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
const MODE = process.env.MODE;
app.listen(PORT, () =>
  console.log(
    `Mini Message Board App - mode is ${MODE} listening on port ${PORT}!`
  )
);
