const mongoose = require("mongoose")
const schema = mongoose.Schema

const Usuario = new schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

mongoose.model("users", Usuario)