const mongoose = require("mongoose");
const productschema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
   image: String,
  rating: Number,
});

const Products= new mongoose.model("Products",productschema)
module.exports = Products