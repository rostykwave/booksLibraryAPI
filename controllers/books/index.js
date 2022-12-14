const addBookController = require('./addBookController');
const getAllBooksController = require('./getAllBooksController');
const getBookByIdController = require('./getBookByIdController');
const removeBookByIdController = require('./removeBookByIdController');
const updateBookByIdController = require('./updateBookByIdController');
const updateFavoriteBookByIdController = require('./updateFavoriteBookByIdController');

module.exports = {
  addBookController,
  getAllBooksController,
  getBookByIdController,
  removeBookByIdController,
  updateBookByIdController,
  updateFavoriteBookByIdController,
};
