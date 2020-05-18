var mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  foodType: {
    type: String,
  },
  perishable: {
    type: String,
  },

  sellByDate: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Food = mongoose.model("food", FoodSchema);
