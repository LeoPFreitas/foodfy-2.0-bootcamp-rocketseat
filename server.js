const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

// para utililizar arquivos estáticos
server.use(express.static('public'))

// configurar template engine
server.set("view engine", 'html')

nunjucks.configure("views", {
    express: server
})

// criando a rota
server.get("/", function (req, res) {
    return res.render("index")
})

server.get("/receitas", function (req, res) {
    return res.render("receitas")
})

server.get("/sobre", function (req, res) {
    return res.render("sobre")
})

server.listen(5000, function () {
    console.log("Server is running!")
})
