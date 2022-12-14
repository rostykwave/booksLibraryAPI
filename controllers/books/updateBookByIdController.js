const booksServices = require('../../services/books');
const { requestError } = require('../../helpers');

const updateBookByIdController = async (req, res) => {
  const { id } = req.params;

  const result = await booksServices.updateBookByIdService(id, req.body);

  if (!result) {
    throw requestError(404, 'Not found');
  }
  res.status(200).json({
    success: true,
    message: 'Successfully updated:',
    data: result,
  });
};

module.exports = updateBookByIdController;
