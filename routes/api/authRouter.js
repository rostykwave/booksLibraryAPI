const express = require('express');
const { validateBody, validateUserStatus } = require('../../middlewares');
const { schemas } = require('../../models/user');
const { controllerWrapper } = require('../../helpers');
const authControllers = require('../../controllers/auth');
const router = express.Router();

router.post(
  '/register',
  validateBody(schemas.registerSchema),
  controllerWrapper(authControllers.registerController)
);

router.post(
  '/login',
  validateBody(schemas.loginSchema),
  validateUserStatus,
  controllerWrapper(authControllers.loginController)
);

module.exports = router;
