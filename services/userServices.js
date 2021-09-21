const mongoose = require("mongoose");
require("../models/user");
const user = mongoose.model("users")

module.exports = {
    async create(name, password){

        const createdUser = {
            name,
            password
        };

        await new user(createdUser).save()

    return   
    }
}