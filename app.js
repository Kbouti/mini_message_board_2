const express = require("express");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => res.send("Hello, world!"));

const PORT = process.env.PORT || 3000;
const MODE = process.env.MODE || "development";
app.listen(PORT, () => console.log(`My first Express app - mode is ${MODE} listening on port ${PORT}!`));
