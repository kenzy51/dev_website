// migrations/[timestamp]-update-manufacturers.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create a new temporary column for the array data
    await queryInterface.addColumn("Manufacturers", "contactInfoArray", {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true,
    });

    // Copy data from the old column to the new column as needed
    // For this example, I'm assuming you want to convert the existing string into a single-item array
    await queryInterface.sequelize.query(`
      UPDATE "Manufacturers"
      SET "contactInfoArray" = ARRAY["contactInfo"]
      WHERE "contactInfo" IS NOT NULL;
  `);

    // Drop the old column
    await queryInterface.removeColumn("Manufacturers", "contactInfo");

    // Rename the new column to the original name
    await queryInterface.renameColumn(
      "Manufacturers",
      "contactInfoArray",
      "contactInfo"
    );

    // ... (rest of your migration code)

    // Add lat and lng fields
    await queryInterface.addColumn("Manufacturers", "lat", {
      type: Sequelize.DOUBLE,
      allowNull: true,
    });
    await queryInterface.addColumn("Manufacturers", "lng", {
      type: Sequelize.DOUBLE,
      allowNull: true,
    });

    // Add brand field
    await queryInterface.addColumn("Manufacturers", "brand", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    // Add photos field which is an array of strings
    await queryInterface.addColumn("Manufacturers", "photos", {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Revert contactInfo to be a string
    await queryInterface.changeColumn("Manufacturers", "contactInfo", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};
