const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data")

// para utililizar arquivos estáticos
server.use(express.static('public'))

// configurar template engine
server.set("view engine", 'njk')

nunjucks.configure("views", {
    express: server,
    noCache: true
})

// criando a rota
server.get("/", function (req, res) {
    return res.render("home", { items: recipes })
})

// server.get("/receitas", function (req, res) {
//     return res.render("receitas")
// })

server.get("/receitas/:index", function (req, res) {
    const recipeIndex = req.params.index

    const recipe = recipes.find(function (recipe) {
        return recipe == recipes[recipeIndex]
    })

    if (!recipe) {
        return res.send("Not found")
    }

    return res.render("receitas", { recipe: recipe })
})

server.get("/sobre", function (req, res) {
    return res.render("sobre")
})

server.listen(5000, function () {
    console.log("Server is running!")
})
