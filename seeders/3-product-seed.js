// product-seed.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        id: '44d8fc84-350d-4d10-95c1-6799c10bfa9a', // Fake UUID
        name: 'Product 1',
        description: 'Description for Product 1',
        price: 19.99, // Defaulting to 19.99
        manufacturerId: 'aab7e818-990f-4b2b-869f-61dbb7f66e00', // Fake UUID (Replace with actual Manufacturer UUID)
        mediaUrls: ['url1', 'url2'],
        mediaType: 'photo', // Defaulting to 'photo'
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'ea32ddc4-0c11-4b49-8c75-6ff80ea5e27d', // Fake UUID
        name: 'Product 2',
        description: 'Description for Product 2',
        price: 29.99, // Defaulting to 29.99
        manufacturerId: 'bf463383-4e5a-4e82-b869-7aa3a40b37e0', // Fake UUID (Replace with actual Manufacturer UUID)
        mediaUrls: ['url1', 'url2'],
        mediaType: 'photo', // Defaulting to 'photo'
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ... Repeat for other products
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
