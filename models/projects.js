const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const Project = new Schema({
  title:String,
  desc:String,
  img:String,
  url:String,
  githubLink:String
})


module.exports = mongoose.model('Projects',Project)