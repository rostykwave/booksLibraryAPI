const booksServices = require('../../services/books');
const { requestError } = require('../../helpers');

const removeBookByIdController = async (req, res) => {
  const { id } = req.params;

  const result = await booksServices.removeBookByIdService(id);

  if (!result) {
    throw requestError(404, 'Not found');
  }
  res.json({
    message: 'Deleted successfully',
  });
};

module.exports = removeBookByIdController;
