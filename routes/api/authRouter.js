const express = require('express');
const { validateBody } = require('../../middlewares');
const { schemas } = require('../../models/user');
const { controllerWrapper } = require('../../helpers');
const authControllers = require('../../controllers/auth');
const router = express.Router();

router.post(
  '/register',
  validateBody(schemas.registerSchema),
  controllerWrapper(authControllers.register)
);

router.post(
  '/login',
  validateBody(schemas.loginSchema),
  controllerWrapper(authControllers.login)
);

module.exports = router;
