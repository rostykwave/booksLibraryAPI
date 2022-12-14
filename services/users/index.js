const addUserService = require('./addUserService');
const getAllUsersService = require('./getAllUsersService');
const getUserByIdService = require('./getUserByIdService');
const removeUserByIdService = require('./removeUserByIdService');
const updateFavoriteBookByIdService = require('./updateFavoriteBookByIdService');
const updateUserByIdService = require('./updateUserByIdService');

module.exports = {
  addUserService,
  getAllUsersService,
  getUserByIdService,
  removeUserByIdService,
  updateFavoriteBookByIdService,
  updateUserByIdService,
};
