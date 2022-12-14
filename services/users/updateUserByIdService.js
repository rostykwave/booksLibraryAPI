const { User } = require('../../models/user');

const updateUserByIdService = async (id, updatedUser) => {
  return await User.findByIdAndUpdate(id, updatedUser, { new: true });
};

module.exports = updateUserByIdService;
