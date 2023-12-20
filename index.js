const express = require("express");


const db = require("./src/config/connection");
//const route = require("./src/routes");
const cors = require("cors");
const PORT = 5000;
const app = express();

db.connect();

app.use(cors());
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello, world!!!!");
});

// Routes init
//route(app);

console.log(process.env.DB_URL)
app.listen(PORT, () => {
  console.log(`Connect to server is successfully with PORT: ${PORT}`);
});