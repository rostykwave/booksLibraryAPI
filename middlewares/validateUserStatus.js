const { User } = require('../models/user');

const validateUserStatus = async (req, res, next) => {
  const { username } = req.body;
  const user = await User.findOne({ username });

  if (user && user.status === 'Active') {
    next();
  } else {
    res.json({
      success: false,
      message: `User test_user is banned!`,
    });
  }
};

module.exports = validateUserStatus;
