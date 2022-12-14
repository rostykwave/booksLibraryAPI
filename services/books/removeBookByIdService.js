const { Book } = require('../../models/book');

const removeBookByIdService = async id => {
  return await Book.findByIdAndRemove(id);
};

module.exports = removeBookByIdService;
