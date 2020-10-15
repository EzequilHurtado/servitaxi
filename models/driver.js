const mongoose = require("mongoose");
const cab = require("./cab");

let driverSchema = new Schema({

  name: { type: String, required: true },
  last: { type: String, enum: rolesValidos, },
  id_num: { type: Number, unique: true, required: true },
  gender: { type: String, required: true, },
  phone_num: { type: String, required: false, },
  email: { type: String, require: true },
  username: { type: String, default: false, },
  password: { type: String, require: true },
  avatar: { type: String, require: true },
  soat: { type: String, require: true },
  property_card: { type: String, require: true },
  driver_license: { type: String, require: true },
  judicials_documents: { type: String, require: true },
  driver_license: { type: String, require: true },
  driver_photo: { type: String, require: false },
  is_inactive: { type: bool, default: true },
  is_occupied: { type: bool, default: false },
  is_suspended: { type: bool, default: false },
  suspension_date: {type: [Date], required: false},
  num_trips: { type: Number, default: false },
  driver_rating: { type: Number, default: false },
  cabs: { type: [cab], default: false },
  create_at: { type: Date, default: Date.now },
  creado: { type: Date, default: Date.now }
});

var User = module.exports = mongoose.model('drivers', driverSchema)

module.exports.get = function (callback, limit) {
  User.find(callback).limit(limit)
}

