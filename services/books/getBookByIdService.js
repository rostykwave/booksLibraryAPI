const { Book } = require('../../models/book');

const getBookByIdService = async id => {
  return await Book.findById(id);
};

module.exports = getBookByIdService;
