const authServices = require('../../services/auth');

const loginController = async (req, res) => {
  const token = await authServices.loginService(req.body);

  res.json({
    token,
  });
};

module.exports = loginController;
