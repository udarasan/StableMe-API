const mongoose = require("mongoose");

const exchangeSchema = mongoose.Schema({
  uid:String,
  type: String,
  category:String,
  value:Number,
  date:String,
  descrpiton:String,
  total:Number
  
});

module.exports = mongoose.model("exchanges", exchangeSchema);