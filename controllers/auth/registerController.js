const authServices = require('../../services/auth');

const registerController = async (req, res) => {
  const result = await authServices.registerService(req.body);

  res.status(201).json({
    username: result.username,
    first_name: result.first_name,
    last_name: result.last_name,
    status: result.status,
  });
};

module.exports = registerController;
