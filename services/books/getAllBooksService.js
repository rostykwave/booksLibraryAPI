const { Book } = require('../../models/book');

const getAllBooksService = async (skip, limit) => {
  return await Book.find({}, '-createdAt -updatedAt', {
    skip,
    limit,
  });
};

module.exports = getAllBooksService;
