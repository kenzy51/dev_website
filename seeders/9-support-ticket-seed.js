// support-ticket-seed.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SupportTickets', [
      {
        id: 'b23f92d0-2c89-4be4-98cc-9eef0f0debcf', // Fake UUID
        userId: 'd2fdd9e4-3a02-4a58-9ed0-7d64ab164e55', // Fake UUID (Replace with actual User UUID)
        subject: 'Issue with order',
        description: 'I have an issue with my recent order. It has not been delivered yet.',
        status: 'open',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'f68b3b89-86a1-42c4-a754-1374bb374be2', // Fake UUID
        userId: '22f4643a-4e29-45b8-877c-9e8f8a7a96e4', // Fake UUID (Replace with actual User UUID)
        subject: 'Product inquiry',
        description: 'I would like to inquire about the availability of a specific product.',
        status: 'closed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ... Repeat for other support tickets
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SupportTickets', null, {});
  }
};
