// user-seed.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: 'd2fdd9e4-3a02-4a58-9ed0-7d64ab164e55', // Fake UUID
        name: 'User 1',
        email: 'user1@example.com',
        password: 'password1',
        role: 'user',
        avatar: 'default-avatar-url-2',
        phoneNumber: '+1234567890',
        address: '123 Main St, City, Country',
        website: 'https://user1.com',
        bio: 'Bio for user 2',
        fbUrl: 'https://social1.com',
        twtUrl: 'https://social1.com',
        linkUrl: 'https://social2.net',
        insUrl: 'https://social1.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '22f4643a-4e29-45b8-877c-9e8f8a7a96e4', // Fake UUID
        name: 'User 2',
        email: 'user2@example.com',
        password: 'password2',
        role: 'user',
        avatar: 'default-avatar-url-2',
        phoneNumber: '+1234567890',
        address: '123 Main St, City, Country',
        website: 'https://user2.net',
        bio: 'Bio for user 2',
        fbUrl: 'https://social1.com',
        twtUrl: 'https://social1.com',
        linkUrl: 'https://social2.net',
        insUrl: 'https://social2.net',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '6e22d1b8-4581-4be9-a2b1-994c2478c4aa', // Fake UUID
        name: 'User 3',
        email: 'user3@example.com',
        password: 'password3',
        role: 'user',
        avatar: 'default-avatar-url-2',
        phoneNumber: '+0987654321',
        address: '123 Main St, City, Country',
        website: 'https://user2.net',
        bio: 'Bio for user 2',
        fbUrl: 'https://social1.com',
        twtUrl: 'https://social1.com',
        linkUrl: 'https://social1.com',
        insUrl: 'https://social1.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '1344567a-4e25-42f1-99c2-0a52b7a8c6ee', // Fake UUID
        name: 'User 4',
        email: 'user4@example.com',
        password: 'password4',
        role: 'user',
        avatar: 'default-avatar-url-2',
        phoneNumber: '+0987654321',
        address: '456 Elm St, Town, Country',
        website: 'https://user1.com',
        bio: 'Bio for user 1',
        fbUrl: 'https://social2.net',
        twtUrl: 'https://social1.com',
        linkUrl: 'https://social1.com',
        insUrl: 'https://social2.net',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '99999a2d-17b0-4a41-8a27-3468f6f1b422', // Fake UUID
        name: 'User 5',
        email: 'user5@example.com',
        password: 'password5',
        role: 'user',
        avatar: 'default-avatar-url-1',
        phoneNumber: '+1234567890',
        address: '456 Elm St, Town, Country',
        website: 'https://user1.com',
        bio: 'Bio for user 1',
        fbUrl: 'https://social1.com',
        twtUrl: 'https://social1.com',
        linkUrl: 'https://social1.com',
        insUrl: 'https://social2.net',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more users with fake UUIDs as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
