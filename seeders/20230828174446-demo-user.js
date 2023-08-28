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
      {
        name: 'Jane',
        surname: 'Smith',
        email: 'jsmith@gmail.com',
        dni: '33333333J',
        role: 'user',
        image_path: '/assets/users/profile.jpg',
        password: bcrypt.hashSync('puredepatata', 10),
        confirmed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'David',
        surname: 'Adams',
        email: 'dadams@gmail.com',
        dni: '44444444Y',
        role: 'user',
        image_path: '/assets/users/profile.jpg',
        password: bcrypt.hashSync('puredepatata', 10),
        confirmed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nicole',
        surname: 'Martins',
        email: 'nmartins@gmail.com',
        dni: '55555555P',
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
