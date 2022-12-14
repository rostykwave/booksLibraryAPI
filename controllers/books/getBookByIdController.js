const booksServices = require('../../services/books');
const { requestError } = require('../../helpers');

const getBookByIdController = async (req, res) => {
  const { id } = req.params;

  const result = await booksServices.getBookByIdService(id);

  if (!result) {
    throw requestError(404, 'Not found');
  }
  res.json({
    success: true,
    data: result,
  });
};

module.exports = getBookByIdController;
