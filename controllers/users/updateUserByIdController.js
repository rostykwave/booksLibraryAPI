const usersServices = require('../../services/Users');
const { requestError } = require('../../helpers');

const updateUserByIdController = async (req, res) => {
  const { id } = req.params;

  const result = await usersServices.updateUserByIdService(id, req.body);

  if (!result) {
    throw requestError(404, 'Not found');
  }
  res.status(201).json({
    success: true,
    message: 'Successfully updated:',
    data: result,
  });
};

module.exports = updateUserByIdController;
