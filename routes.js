const express = require('express')
const routes = express.Router() // variavel fica responsável pelas rotas
const recipes = require('./controllers/recipes')
const home = require('./controllers/home')

// HOME
routes.get('/', function(req, res){
  return res.redirect("/home")
})

routes.get('/home', home.index) // Mostrar a lista de receitas


// RECIPES
routes.get('/recipes', function(req, res){
  return res.redirect('/admin/recipes')
})

routes.get('/admin/recipes', recipes.index) // Mostrar a lista de receitas
routes.get('/admin/recipes/create', recipes.create) // Mostrar formulário de nova receita
routes.get('/admin/recipes/:id', recipes.show) // Exibir detalhes de uma receita
routes.get('/admin/recipes/:id/edit', recipes.edit) // Mostrar formulário de edição de receita
// routes.post('/admin/recipes', recipes.post) // Cadastrar nova receita
// routes.put('/admin/recipes', recipes.put) // Editar uma receita
// routes.delete('/admin/recipes', recipes.delete) // Deletar uma receita

// ABOUT
routes.get('/sobre', function(req, res){
  return res.render("about/sobre", { recipe: recipes.ingredients })
})

// Exporta a variável com as rotas
module.exports = routes