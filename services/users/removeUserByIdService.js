const { User } = require('../../models/user');

const removeUserByIdService = async id => {
  return await User.findByIdAndRemove(id);
};

module.exports = removeUserByIdService;
