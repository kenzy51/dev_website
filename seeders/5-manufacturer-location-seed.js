// manufacturer-location-seed.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ManufacturerLocations', [
      {
        id: 'b918e5e8-282f-4f01-885a-90e53f1ab0f1', // Fake UUID
        manufacturerId: 'aab7e818-990f-4b2b-869f-61dbb7f66e00', // Fake UUID (Replace with actual Manufacturer UUID)
        latitude: 41.98765, // Example latitude
        longitude: -70.12345, // Example longitude
        photoUrls: Sequelize.literal("ARRAY[]::varchar[]"), // Defaulting to an empty array
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '19a4b741-550a-4a13-936e-5e1477b67c14', // Fake UUID
        manufacturerId: 'bf463383-4e5a-4e82-b869-7aa3a40b37e0', // Fake UUID (Replace with actual Manufacturer UUID)
        latitude: 42.12345, // Example latitude
        longitude: -71.98765, // Example longitude
        photoUrls: Sequelize.literal("ARRAY[]::varchar[]"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ... Repeat for other manufacturer locations
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ManufacturerLocations', null, {});
  }
};
