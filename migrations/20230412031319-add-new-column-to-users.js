'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'user_name', Sequelize.STRING);
    await queryInterface.addColumn('users', 'user_img', Sequelize.TEXT);
    await queryInterface.addColumn('users', 'description', Sequelize.TEXT);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
