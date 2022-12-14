const booksServices = require('../../services/books');

const addBookController = async (req, res) => {
  const result = await booksServices.addBookService(req.body);

  res.status(201).json({
    success: true,
    message: 'Successfully created:',
    data: result,
  });
};

module.exports = addBookController;
