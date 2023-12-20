// const jwt = require("jsonwebtoken");
const Hotels = require("../model/hotelModel");

class HotelController {
  async readHotel(req, res) {
    try {
      const hotelList = await Hotels.find();
      res.status(200).json(hotelList);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}

module.exports = new HotelController();
