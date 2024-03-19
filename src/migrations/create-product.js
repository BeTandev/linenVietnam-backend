'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      nameProduct: {type: Sequelize.STRING},
      detailProduct: {type: Sequelize.STRING},
      priceProduct: {type: Sequelize.FLOAT},
      categoryProduct: {type: Sequelize.STRING},
      reviewProduct: {type:Sequelize.STRING},
      tagProduct: {type:Sequelize.STRING},
      amountProduct: {type:Sequelize.INTEGER},
      weightProduct: {type:Sequelize.FLOAT},
      widthProduct: {type:Sequelize.FLOAT},
      image: {type:Sequelize.STRING},
      filename: {type: Sequelize.STRING},
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
    await queryInterface.dropTable('Products');
  }
};