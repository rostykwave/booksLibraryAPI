const { Book } = require('../../models/book');

const getAllBooksService = async (
  sortCreatedAt,
  skip,
  limit,
  author = { $exists: true }
) => {
  return await Book.find({ author }, '-createdAt -updatedAt', {
    skip,
    limit,
  }).sort({ createdAt: sortCreatedAt });
};

module.exports = getAllBooksService;
