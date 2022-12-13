const bcrypt = require('bcryptjs');
const { User } = require('../../models/user');
const { requestError } = require('../../helpers');

const registerController = async (req, res) => {
  const { username, password, first_name, last_name, status } = req.body;

  const user = await User.findOne({ username });
  if (user) {
    throw requestError(409, 'Email in use');
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const result = await User.create({
    username,
    password: hashPassword,
    first_name,
    last_name,
    status,
  });

  res.status(201).json({
    username: result.username,
    first_name: result.first_name,
    last_name: result.last_name,
    status: result.status,
  });
};

module.exports = registerController;
