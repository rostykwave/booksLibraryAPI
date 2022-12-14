const usersServices = require('../../services/Users');
const { requestError } = require('../../helpers');

const getUserByIdController = async (req, res) => {
  const { id } = req.params;

  const result = await usersServices.getUserByIdService(id);

  if (!result) {
    throw requestError(404, 'Not found');
  }
  res.json({
    success: true,
    data: result,
  });
};

module.exports = getUserByIdController;
