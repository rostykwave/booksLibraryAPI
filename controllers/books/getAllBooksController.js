const booksServices = require('../../services/books');

const getAllBooksController = async (req, res) => {
  const {
    sortCreatedAt = 1,
    limit = 10,
    page = 1,
    skip = (page - 1) * limit,
    author,
  } = req.query;

  const result = await booksServices.getAllBooksService(
    sortCreatedAt,
    skip,
    limit,
    author
  );

  res.json({
    success: true,
    data: result,
  });
};

module.exports = getAllBooksController;
