'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('playermatches', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID
      },
      player_id: {
        //reference au model crée users (id)
        references:{
          model:'players',
          //identifiant utilisateur
          key:'id'
        },
        allowNull: false,
        type: Sequelize.UUID
      },
      match_id: {
        //reference au model crée users (id)
        references:{
          model:'matches',
          //identifiant utilisateur
          key:'id'
        },
        allowNull: false,
        type: Sequelize.UUID
      },
      player_color: {
        allowNull: false,
        type: Sequelize.ENUM('WHITE','BLACK'),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('playermatches');
  }
};