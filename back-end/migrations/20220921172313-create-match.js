'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID
      },
      public: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      winner_player_id: {
        //reference au model crée users (id)
        references:{
          model:'players',
          //identifiant utilisateur
          key:'id'
        },
        type: Sequelize.UUID,
        allowNull: true,
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      color_turn: {
        type: Sequelize.ENUM('WHITE','BLACK'),
        allowNull: true,
        defaultValue:'WHITE'
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
    await queryInterface.dropTable('matches');
  }
};