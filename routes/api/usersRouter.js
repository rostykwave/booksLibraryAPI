const express = require('express');
const usersControllers = require('../../controllers/users');
const { validateBody, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/user');
const { controllerWrapper } = require('../../helpers');
const router = express.Router();

router.post(
  '/',
  authenticate,
  validateBody(schemas.registerSchema),
  controllerWrapper(usersControllers.addUserController)
);

router.get(
  '/',
  authenticate,
  controllerWrapper(usersControllers.getAllUsersController)
);

router.get(
  '/:id',
  authenticate,
  controllerWrapper(usersControllers.getUserByIdController)
);

router.delete(
  '/:id',
  authenticate,
  controllerWrapper(usersControllers.removeUserByIdController)
);

router.put(
  '/:id',
  authenticate,
  validateBody(schemas.registerSchema),
  controllerWrapper(usersControllers.updateUserByIdController)
);

module.exports = router;
