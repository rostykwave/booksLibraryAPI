const booksServices = require('../../services/books');

const getAllBooksController = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  const skip = (page - 1) * limit;

  const result = await booksServices.getAllBooksService(skip, limit);

  res.json(result);
};

module.exports = getAllBooksController;
