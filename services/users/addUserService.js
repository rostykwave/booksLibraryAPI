const bcrypt = require('bcryptjs');
const { User } = require('../../models/user');
const { requestError } = require('../../helpers');

const addUserService = async ({
  username,
  password,
  first_name,
  last_name,
  status,
}) => {
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

  return result;
};

module.exports = addUserService;
