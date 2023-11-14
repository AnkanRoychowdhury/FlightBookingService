'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('Bookings','status',{
      type: Sequelize.ENUM,
      allowNull: false,
      values: ['InProcess','Booked','Cancelled'],
      defaultValue: 'InProcess'
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('Bookings','status',{
      type: Sequelize.ENUM,
      allowNull: false,
      values: ['InProcess','Booked','Cancelled']
    });
  }
};
