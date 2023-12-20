const mongoose = require("mongoose");


async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/booking");
    console.log(process.env.DB_URL);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.log(process.env.DB_URL);
    console.log("Connection to MongoDB failed", error.message);
  }
}

module.exports = { connect };