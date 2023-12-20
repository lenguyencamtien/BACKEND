const express = require("express");
const router = express.Router();
const env = require("../config/env");

const hotelController = require("../app/controller/hotelController");

router.get(env.HOTEL_READ, hotelController.readHotel);

module.exports = router;
