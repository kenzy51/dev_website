// bid-seed.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bids', [
      {
        id: '89511aeb-2a45-4615-97cd-34394aa14748', // Fake UUID
        manufacturerId: 'aab7e818-990f-4b2b-869f-61dbb7f66e00', // Fake UUID (Replace with actual Manufacturer UUID)
        productRequestId: '1c4dab71-5482-4c5a-8a1c-b13107608dcd', // Fake UUID (Replace with actual ProductRequest UUID)
        bidAmount: 150.0, // Example bid amount
        description: 'Description for Bid 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2b60d151-1811-4a91-8521-5e3f1b79b6ad', // Fake UUID
        manufacturerId: 'bf463383-4e5a-4e82-b869-7aa3a40b37e0', // Fake UUID (Replace with actual Manufacturer UUID)
        productRequestId: 'e0db5c7f-59e7-43f2-a968-03f2f1ebfd8b', // Fake UUID (Replace with actual ProductRequest UUID)
        bidAmount: 80.0, // Example bid amount
        description: 'Description for Bid 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ... Repeat for other bids
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bids', null, {});
  }
};
