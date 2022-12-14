const usersServices = require('../../services/Users');

const getAllUsersController = async (req, res) => {
  const {
    sortCreatedAt = 1,
    limit = 10,
    page = 1,
    skip = (page - 1) * limit,
  } = req.query;

  const result = await usersServices.getAllUsersService(
    sortCreatedAt,
    skip,
    limit
  );

  res.json({
    success: true,
    data: result,
  });
};

module.exports = getAllUsersController;
