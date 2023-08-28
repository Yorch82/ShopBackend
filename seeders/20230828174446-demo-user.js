'use strict';

const bcrypt = require ('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Jorge',
        surname: 'Campo',
        email: 'jcampo@gmail.com',
        dni: '11111111Y',
        role: 'admin',
        image_path: '/assets/users/profile.jpg',
        password: bcrypt.hashSync('puredepatata', 10),
        confirmed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'John',
        surname: 'Doe',
        email: 'johndoe@gmail.com',
        dni: '22222222Y',
        role: 'user',
        image_path: '/assets/users/profile.jpg',
        password: bcrypt.hashSync('puredepatata', 10),
        confirmed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
