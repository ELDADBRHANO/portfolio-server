const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const Eldad = new Schema({
  name: String,
  img: String,
  aboutMe: String,
});

module.exports = mongoose.model("Eldad", Eldad);
