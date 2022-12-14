const { requestError } = require('../../helpers');
const booksServices = require('../../services/books');
const usersServices = require('../../services/users');

const updateFavoriteBookByIdController = async (req, res) => {
  //User id
  const { id } = req.params;
  const user = req.user;

  const book = await booksServices.getBookByIdService(id);

  if (!book) {
    throw requestError(404, 'Book Not found');
  }

  const result = await usersServices.updateFavoriteBookByIdService(
    user.id,
    book
  );

  res.status(200).json({
    success: true,
    message: 'Book successfully added to favorites:',
    data: result,
  });
};

module.exports = updateFavoriteBookByIdController;
