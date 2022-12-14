const usersServices = require('../../services/users');

const addUserController = async (req, res) => {
  const result = await usersServices.addUserService(req.body);

  res.status(201).json({
    success: true,
    message: 'Successfully created:',
    data: result,
  });
};

module.exports = addUserController;
