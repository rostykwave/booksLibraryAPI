const { User } = require('../../models/user');

const updateFavoriteBookByIdService = async (userId, book) => {
  return await User.updateOne(
    { _id: userId },
    { $addToSet: { favorites: book } }
  );
};

module.exports = updateFavoriteBookByIdService;
