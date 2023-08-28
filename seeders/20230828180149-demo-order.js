'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Orders', [
      {
      order_num: 1 ,
      date: "1987-07-25" ,
      userId: 1,        
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      order_num: 2 ,
      date: "1999-07-25",
      userId: 2  ,      
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      order_num:3,
      date: "2010-07-25",
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      order_num:4,
      date: "2030-07-25",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
        },
        {
      order_num:5,
      date: "2030-07-25",
      userId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
          },
          {
      order_num:6,
      date: "2030-07-25",
      userId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
            },
          {
      order_num:7,
      date: "2030-07-25",
      userId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
            },
         {
      order_num:8,
      date: "2030-07-25",
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
            },    
    ])   
  },

  async down (queryInterface, Sequelize) {
  }
};
