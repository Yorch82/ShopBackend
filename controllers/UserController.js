const { User, Sequelize, } = require('../models/index.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development'];
const { Op } = Sequelize;
const transporter = require('../config/nodemailer');

const UserController = {
  async create(req, res, next) {
    try {
      const hash = bcrypt.hashSync(req.body.password, 10);
      const user = await User.create({
        attributes: { exclude: ['createdAt', 'updatedAt', 'confirmed'] },
        ...req.body,
        password: hash,
        confirmed: true,
        //cambiado de false a true
        role: 'user',
      });
      // const url = 'http://localhost:8000/users/confirm/' + req.body.email;
      // await transporter.sendMail({
      //   to: req.body.email,
      //   subject: 'Confirme su registro',
      //   html: `<h3>Bienvenido, estás a un paso de registrarte </h3>
      //     <a href="${url}"> Click para confirmar tu registro</a>
      //     `,
      // });
      res.status(201).send({
        // message: 'We sent you an email to confirm your register...',
        message: 'User registered',
        user,
      });
    } catch (error) {
      error.origin = 'User';
      next(error);
    }
  },  
};

module.exports = UserController;
