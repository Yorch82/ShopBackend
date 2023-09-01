const { User, Order, Product, Token, Sequelize } = require('../models/index.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const { Op } = Sequelize;
const transporter = require('../config/nodemailer');

const UserController = {
  //User create
  async create(req, res, next) {
    try {
      const hash = bcrypt.hashSync(req.body.password, 10);
      const user = await User.create({
        attributes: { exclude: ['createdAt', 'updatedAt', 'confirmed'] },
        ...req.body,
        password: hash,
        confirmed: true,
        image_path: '/assets/users/profile.jpg',
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
  //Confirm user account
  async confirm(req, res) {
    try {
      const user = await User.update(
        { confirmed: true },
        {
          where: {
            email: req.params.email,
          },
        }
      );
      res.status(201).send('Usuario confirmado con exito');
    } catch (error) {
      console.error(error);
    }
  },
  //Login
  async login(req, res) {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!user) {
        return res
          .status(400)
          .send({ message: 'User or password incorrect...' });
      }
      if (!user.confirmed) {
        return res.status(400).send({ message: 'You may confirm your email' });
      }
      const isMatch = bcrypt.compareSync(req.body.password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .send({ message: 'User or password incorrect...' });
      }
      token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      Token.create({ token: token, userId: user.id });
      //res.send({ message: 'user logged...', user });
      res.send({ message: 'Bienvenid@' + user.name, user, token });
    } catch (error) {
      res.status(401).send({ message: 'We had an issue checking the user...' });
    }
  },
  //Logout
  async logout(req, res, next) {
    try {
      await Token.destroy({
        where: {
          [Op.and]: [
            { userId: req.user.id },
            { token: req.headers.authorization },
          ],
        },
      });
      return res.send({ message: 'User disconnected...' });
    } catch (error) {
      error.origin = 'User';
      next(error);
    }
  },
  //Gets all products
  async getAll(req, res) {
    try {
      const users = await User.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt', 'confirmed'] },
      });

      res.status(201).send({ mensaje: 'Search completed...', users });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ mensaje: 'We had an issue searching the table...' });
    }
  },
  //Gets the users info
  async getUserInfo(req, res) {
    try {
      const user = await User.findOne({
        // attributes: {exclude: ['createdAt','updatedAt','confirmed']},
        where: {
          id: req.user.id,
        },
        include: [
          {
            model: Order,
            attributes: ['order_num','date'],
            include: [
              {
                model: Product,
                attributes: ['product', 'price', 'image_path'],
                through: { attributes: [] },
              },
            ],
          },
        ],
      });
      if (!user) {
        return res
          .status(400)
          .send({ mensaje: 'User or Password incorrect', user });
      }
      res.status(201).send({ mensaje: 'User find', user });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ mensaje: 'We had an issue searching the user...' });
    }
  },
  //Gets the user and their request
  async getUserOrderProduct(req, res, next) {
    try {
      const usersOrders = await User.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'confirmed', 'password'],
        },
        include: [
          {
            model: Order,
            attributes: ['order_num'],
            include: [
              {
                model: Product,
                attributes: ['product', 'price'],
                through: { attributes: [] },
              },
            ],
          },
        ],
      });
      res.status(201).send({ mensaje: 'Show Users with Orders', usersOrders });
    } catch (error) {
      error.origin = 'User';
      next(error);
    }
  },
  async updateUser(req, res, next) {
    try {
      const updatedUser = {};
      updatedUser.username = req.body.username;
      updatedUser.firstName = req.body.firstName;
      updatedUser.lastName = req.body.lastName;
      updatedUser.birthDate = req.body.birthDate ? req.body.birthDate : undefined;

      // Dont' allow to update 'role':
      updatedUser.role = req.user.role;

      // Hash password, if updated:
      if (req.body.password) {
        updatedUser.password = bcrypt.hashSync(req.body.password, 10);
      }
      updatedUser.active = req.user.active;

      // If there is an avatar, get the filename
      if (req.file) {
        updatedUser.image_path = '/assets/users/' + req.file.filename;
      }

      const result = await User.update(
        updatedUser,
        { where: { id: req.user.id }, }
      );

      const user = await User.findOne({
        where: {
          id: req.user.id,
        },
      });

      if (result) {        
        return res.status(201).send({ message: "User updated successfully", user });
      } else {
        return res.send({ message: "Can't update user" });
      }
    } catch (err) {
      err.origin = "User Update";
      next(err);
    }
  },
};

module.exports = UserController;
