Intl = require("intl")
const recipes = require("../data")

exports.index = function(req, res){
  return res.render("home/index", {items: recipes})
}