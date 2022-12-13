const express = require('express');
const { validateBody } = require('../../middlewares');

const { controllerWrapper } = require('../../helpers');
const authControllers = require('../../controllers/auth');

const router = express.Router();

router.post('/register', controllerWrapper(authControllers.register));

router.post('/login', controllerWrapper(authControllers.login));

module.exports = router;
