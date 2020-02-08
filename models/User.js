const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: {type: String, required: true, unique: true},
  passWord: { type: String, required: true, minlength: 8 },
  email: { type: String, required: true, unique: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: Number, required: true },
  isDeleted:{type:Boolean, default: false},
  date: { type: Date, default: Date.now }
});
    UserSchema.methods.validPassword=function(passWord) {
      return bcrypt.compare(passWord, this.passWord);
    }

const User = mongoose.model("User", UserSchema);

module.exports = User;
