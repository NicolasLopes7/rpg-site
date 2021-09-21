const mongoose = require("mongoose");
const { create } = require("../services/userServices");
require("../models/user");
const user = mongoose.model("users")
const UserServices = require("../services/userServices")

module.exports = {
    async create(req,res){
        const {name, password} = req.body

        const erros = []

        if(!name || name.trim() < 1){
            erros.push({message: "é necessario colocar um nome"})
        }
        if(!password || password.trim() < 1){
            erros.push({message: "é necessario colocar uma senha"})
        }

        const a = await user.findOne({name : name})

        if(a){
            console.log("existe")
        } else {
            console.log("não existe")
            await UserServices.create(name, password)
        }

        

        return res.send("chama")
    }
}