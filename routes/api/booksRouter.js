const express = require('express');
const booksControllers = require('../../controllers/books');
const { validateBody, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/book');
const { controllerWrapper } = require('../../helpers');
const router = express.Router();

router.post(
  '/',
  authenticate,
  validateBody(schemas.addSchema),
  controllerWrapper(booksControllers.addBookController)
);

router.get(
  '/',
  authenticate,
  controllerWrapper(booksControllers.getAllBooksController)
);

router.get(
  '/:id',
  authenticate,
  controllerWrapper(booksControllers.getBookByIdController)
);

router.delete(
  '/:id',
  authenticate,
  controllerWrapper(booksControllers.removeBookByIdController)
);

router.put(
  '/:id',
  authenticate,
  validateBody(schemas.addSchema),
  controllerWrapper(booksControllers.updateBookByIdController)
);

module.exports = router;
