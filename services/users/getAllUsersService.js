const { User } = require('../../models/user');

const getAllUsersService = async (sortCreatedAt, skip, limit) => {
  return await User.find({}, ' -token -password', {
    skip,
    limit,
  })
    .populate('favorites', ' -createdAt -updatedAt')
    .sort({ createdAt: sortCreatedAt });
};

module.exports = getAllUsersService;
