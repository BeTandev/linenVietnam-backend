'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameProductOrder: {type: Sequelize.STRING},
      nameUserOrder: {type: Sequelize.STRING},
      addressOrder: {type: Sequelize.STRING},
      phoneNumberOrder: {type: Sequelize.INTEGER},
      amountOrder: {type: Sequelize.STRING},
      totalOrder: {type:Sequelize.INTEGER},
      companyNameOrder: {type:Sequelize.STRING},
      emailOrder: {type:Sequelize.STRING},
      noteOrder: {type:Sequelize.STRING},
      shippingMethodOrder: {type:Sequelize.STRING},
      createdAt: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};