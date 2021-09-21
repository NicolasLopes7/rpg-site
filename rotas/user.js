const express = require("express")
const app = express()
const UserControllers = require("../controllers/userController")

app.get("/user", (req, res) => {
    res.render("./rpg")
})

app.get("/user/create", (req, res) => {

})

app.post("/user/create" , UserControllers.create)


module.exports = app