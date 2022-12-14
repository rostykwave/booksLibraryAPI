const { Book } = require('../../models/book');

const updateBookByIdService = async (id, updatedBook) => {
  return await Book.findByIdAndUpdate(id, updatedBook, { new: true });
};

module.exports = updateBookByIdService;
