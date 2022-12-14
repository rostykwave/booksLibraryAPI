const { requestError } = require('../helpers');
const { User } = require('../models/user');

const validateUserStatus = async (req, res, next) => {
  const { username } = req.body;
  const user = await User.findOne({ username });

  console.log(user);

  if (!user) {
    throw requestError(401, 'Username or password wrong');
  }

  if (user.status === 'Active') {
    next();
  } else {
    res.json({
      success: false,
      message: `User test_user is banned!`,
    });
  }
};

module.exports = validateUserStatus;
