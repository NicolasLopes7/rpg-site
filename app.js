const express = require("express")
const app = express()
const adminRoutes = require("./rotas/admin")
const bodyParser = require("body-parser")
const porta = 3333

app.set('view engine',  'ejs')

//static
app.use(express.static("public"))

//body-parser
app.use(bodyParser.urlencoded({ extended: false }))

app.use(adminRoutes)

app.listen(porta, () => {
    console.log(`ta rodando na porta: ${porta}`)
})