Intl = require("intl")
const recipes = require("../data")

// Index
exports.index = function (req, res) {
  return res.render("admin/recipes/index", { items: recipes })
}

// Show
exports.show = function (req, res) {
  const recipeIndex = req.params.id // pega o ID passado como parametro na URL

  // Retorna o objeto na posição ID
  const recipe = recipes.find(function(recipe) {
    return recipe == recipes[recipeIndex]
  })

  if (!recipe){
    return res.send("Not found!")
  }

  return res.render("admin/recipes/details", { recipe: recipe })
}

// Edit
exports.edit = function(req, res) {
  return res.render('admin/recipes/edit')
}

exports.create = function(req, res) {
  return res.render('admin/recipes/create')
}
// server.get("/receitas/:index", function (req, res) {
//   const recipeIndex = req.params.index

//   const recipe = recipes.find(function (recipe) {
//       return recipe == recipes[recipeIndex]
//   })

//   if (!recipe) {
//       return res.send("Not found")
//   }

//   return res.render("receitas", { recipe: recipe })
// })
