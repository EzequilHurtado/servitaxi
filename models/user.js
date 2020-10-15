const mongoose = require("mongoose");

let userSchema = new Schema({

  name: { type: String, required: [true, "EL nombre es necesario"], },
  last: { type: String, enum: rolesValidos, },
  email: { type: String, unique: true, required: [true, "EL coreo es necesario"], },
  password: { type: String, required: [true, "La contraseña es obligatoria"], },
  avatar: { type: String, required: false, },
  gender: { type: String, require: [true, "El genero es obligatorio"] },
  phone_num: { type: String, default: false, },
  is_inactive: { type: bool, default: false, },
  create_at: { type: Date, default: Date.now },
  creado: { type: Date, default: Date.now }
});

var User = module.exports = mongoose.model('users', userSchema)

module.exports.get = function (callback, limit) {
  User.find(callback).limit(limit)
}

