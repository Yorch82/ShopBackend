const { User, Token, Sequelize } = require('../models');
const { Op } = Sequelize;
const jwt = require('jsonwebtoken');
require("dotenv").config();

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(payload.id);
    const tokenFound = await Token.findOne({
      where: {
        [Op.and]: [{ userId: user.id }, { token: token }],
      },
    });
    if (!tokenFound) {
      res.status(401).send({ message: 'You are not authorized' }); 
      return
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ error, message: 'There is a problem with the token'});
  }
};

const isAdmin = async (req, res, next) => {
  const admins = "admin";
  if (!admins.includes(req.user.role)) {
    return res.status(403).send({
      message: "You don't have permissions",
    });
  }
  next();
};


module.exports = { authentication, isAdmin };