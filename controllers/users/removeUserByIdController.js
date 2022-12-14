const usersServices = require('../../services/Users');
const { requestError } = require('../../helpers');

const removeUserByIdController = async (req, res) => {
  const { id } = req.params;

  const result = await usersServices.removeUserByIdService(id);

  if (!result) {
    throw requestError(404, 'Not found');
  }
  res.json({
    success: true,
    message: 'Successfully deleted:',
  });
};

module.exports = removeUserByIdController;
