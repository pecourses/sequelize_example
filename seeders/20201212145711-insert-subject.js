'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subjects', [{
      caption: 'IT Teology',
      hoursQuantity: 90,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      caption: 'Data Bases',
      hoursQuantity: 80,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      caption: 'Web Dev',
      hoursQuantity: 80,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
      {
        caption: 'Data Science',
        hoursQuantity: 70,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subjects', null, {});
  }
};
