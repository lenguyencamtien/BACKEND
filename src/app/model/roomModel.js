const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema(
  {
    numRoom: { type: String, required: true, unique: true },
    priceRoom: { type: Number, required: true, unique: true },
    typeRoom: { type: String, required: true, unique: true },
    viewRoom: { type: String, required: true, unique: true },
    statusRoom: { type: Number, required: true, unique: true },
    bedRoom: { type: Number, required: true, unique: true },
    imageRoom: {
        type: Object,
        url: { type: URL },
        public_id: { type: String }
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", roomSchema);
