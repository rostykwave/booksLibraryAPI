const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../../models/user');

const { requestError } = require('../../helpers');

const { SECRET_KEY } = process.env;

const loginService = async ({ username, password }) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw requestError(401, 'Username or password wrong');
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw requestError(401, 'Username or password wrong');
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
  await User.findByIdAndUpdate(user._id, { token });

  return token;
};

module.exports = loginService;
