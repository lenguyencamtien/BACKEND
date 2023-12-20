const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    address: { type: String, required: true, unique: true },
    rating:  { type: Number, required: true, unique: true },
    review: { type: String, required: true, unique: true },
    desc: { type: String, required: true, unique: true },
    nearby: { type: Number, required: true, unique: true },
    contact: { type: String, required: true, unique: true },
    amenities: { type: [String], required: true, unique: true },
    rooms: [{ type: Schema.Types.ObjectId, ref: 'Room' }],
    image: {
      type: Object,
      url: { type: URL },
      public_id: { type: String }
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hotel", hotelSchema);
