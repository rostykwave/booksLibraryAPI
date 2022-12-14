const { User } = require('../../models/user');

const getUserByIdService = async id => {
  return await User.findById(id, ' -token -password');
};

module.exports = getUserByIdService;
