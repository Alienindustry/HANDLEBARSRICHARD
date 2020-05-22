var mongoose = require("mongoose");

const MealSchema = new mongoose.Schema({
  fish: {
    type: String,
  },
  meats: {
    type: String,
  },

  vegtables: {
    type: String,
  },
  fruits: {
    type: String,
  },
  dairy: {
    type: String,
  },

  soups: {
    type: String,
  },
  seasonings: {
    type: String,
  },

  beverages: {
    type: String,
  },
  vegans: {
    type: String,
  },
});

module.exports = Meal = mongoose.model("meal", MealSchema);
