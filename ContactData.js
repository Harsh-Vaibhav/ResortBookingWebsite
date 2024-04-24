const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname:{ type: String, required: true },
  email:{type: String, required: true},
  phone:{type: Number, required: true},
  message:{type: String, required: true},
});

const Buser = mongoose.model("ContactData", BookingSchema);

module.exports = Buser;