const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')

const server = express()

//Faz funcionar o req.body
server.use(express.urlencoded({ extended: true }))

server.use(express.static('public')) // para utililizar arquivos estáticos
server.use(methodOverride('_method'))  // para poder utilizar o put, delete no html5
server.use(routes) // o use é um middleware

// configurar template engine
server.set("view engine", 'njk')

nunjucks.configure("views", {
    express: server,
    noCache: true,
    autoescape: false
})

server.listen(5000, function () {
    console.log("Server is running!")
})
