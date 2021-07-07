const mongoose = require("mongoose");

const exchangeSchema = mongoose.Schema({
  uid:String,
  type: String,
  category:String,
  value:String,
  date:String,
  descrpiton:String
  
});

module.exports = mongoose.model("exchanges", exchangeSchema);