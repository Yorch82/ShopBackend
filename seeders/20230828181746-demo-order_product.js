'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Order_Products', [
      {
        orderId: 1,
        productId: 1,
        quantity: 1,
        price: 825,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 1,
        productId: 2,
        quantity: 1,
        price: 289,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 2,
        productId: 3,
        quantity: 1,
        price: 825,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 3,
        productId: 5,
        quantity: 1,
        price: 175,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 4,
        productId: 6,
        quantity: 1,
        price: 999,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 4,
        productId: 7,
        quantity: 1,
        price: 995,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 2,
        productId: 8,
        quantity: 1,
        price: 1025,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 1,
        productId: 9,
        quantity: 1,
        price: 553,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 1,
        productId: 10,
        quantity: 1,
        price: 499,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 3,
        productId: 11,
        quantity: 1,
        price: 160,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 4,
        productId: 12,
        quantity: 1,
        price: 1499,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 5,
        productId: 13,
        quantity: 1,
        price: 1289,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 1,
        productId: 14,
        quantity: 1,
        price: 899,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 2,
        productId: 15,
        quantity: 1,
        price: 699,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 2,
        productId: 16,
        quantity: 1,
        price: 569,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 2,
        productId: 17,
        quantity: 1,
        price: 459,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 5,
        productId: 18,
        quantity: 1,
        price: 379,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 3,
        productId: 19,
        quantity: 1,
        price: 39,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 1,
        productId: 20,
        quantity: 1,
        price: 175,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 2,
        productId: 21,
        quantity: 1,
        price: 59,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 8,
        productId: 21,
        quantity: 1,
        price: 59,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 8,
        productId: 1,
        quantity: 1,
        price: 825,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
  }
};
