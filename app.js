const express = require("express")
const app = express()
const adminRoutes = require("./rotas/admin")
const userRoutes = require("./rotas/user")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const porta = 3333


app.set('view engine',  'ejs')

//static
app.use(express.static("public"))

//body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//moongose
mongoose.connect("mongodb://localhost/rpg")
    .then(() => console.log("coneção com o banco funfando"))
    .catch(() => console.log("coneção com o banco nao esta funfando"))

app.use(adminRoutes, userRoutes)

app.listen(porta, () => {
    console.log(`ta rodando na porta: ${porta}`)
})