const { Book } = require('../../models/book');

const addBookService = async book => {
  return await Book.create({ ...book });
};

module.exports = addBookService;
