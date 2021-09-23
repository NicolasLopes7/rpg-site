const User = require('../models/user');

module.exports = {
  async create(name, password) {
    const createdUser = {
      name,
      password,
    };

    await new User(createdUser).save();
  },
};
