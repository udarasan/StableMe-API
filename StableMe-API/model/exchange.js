const mongoose = require("mongoose");

const exchangeSchema = mongoose.Schema({
  eid: String,
  type: String,
  value:double,
  date:String
});

module.exports = mongoose.model("exchanges", exchangeSchema);