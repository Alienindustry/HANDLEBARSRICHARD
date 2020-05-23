var mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },

  emailAddress: {
    type: String,
  },
  password: {
    type: String,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
