const { Schema, model } = require('mongoose');

const Usuario = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = model('users', Usuario);
