const express = require('express')
const server = express()

// criando a rota
server.get("/", function (req, res) {
    return res.send('Deu bom')
})


server.listen(5000, function () {
    console.log("Server is running!")
})
