const express = require("express");
const app = express();

// Configure view engine
const path = require("path")
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
const newMessageRouter = require("./routes/newMessageRouter");

// app.get("/", (req, res) => res.send("Hello, world!"));


app.use("/", indexRouter);
app.use("/new", newMessageRouter);
// We're gonna try to move this^^ to indexrouter

const PORT = process.env.PORT || 3000;
const MODE = process.env.MODE || "development";
app.listen(PORT, () => console.log(`My first Express app - mode is ${MODE} listening on port ${PORT}!`));
