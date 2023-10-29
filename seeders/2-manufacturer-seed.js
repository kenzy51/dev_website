// manufacturer-seed.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Manufacturers', [
      {
        id: 'aab7e818-990f-4b2b-869f-61dbb7f66e00', // Fake UUID
        name: 'Швейный Цех Центавр',
        description: 'Швейный цех имеет 20 профессиональных швей готовых отшить ваш товар качественно за короткое время. На данный момент мы в поисках хорошего заказчика с которым мы сможем сотрудничать на постоянной основе.',
        location: 'Бишкек, улица Илим',
        contactInfo: [],
        rating: null,
        userId: 'd2fdd9e4-3a02-4a58-9ed0-7d64ab164e55',
        website: 'https://texmart.kg/productions/shveynyy-ceh-centavr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'bf463383-4e5a-4e82-b869-7aa3a40b37e0', // Fake UUID
        name: 'Пошив одежды оптом',
        description: 'Пошим одежды оптом под вашим брендом. Этикети, фурнирура, ткань -наши. Партия от 300 единиц. Носки от 20000 пар.',
        location: 'Бишкек',
        contactInfo:[],
        rating: null,
        userId: 'd2fdd9e4-3a02-4a58-9ed0-7d64ab164e55',
        website: 'https://texmart.kg/productions/poshiv-odezhdy-optom',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'c16f316f-3e12-4f65-8e13-b0e6f4f8aa23', // Fake UUID
        name: 'Швейный производство Аделя',
        description: 'КАЧЕСТВО! КОЛИЧЕСТВО! ГАРАНТИЯ',
        location: 'Алма-атинская 53',
        contactInfo: [],
        rating: null,
        userId: 'd2fdd9e4-3a02-4a58-9ed0-7d64ab164e55',
        website: 'https://texmart.kg/productions/shveynyy-proizvodstvo-adelya',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more manufacturers with fake UUIDs as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Manufacturers', null, {});
  }
};
