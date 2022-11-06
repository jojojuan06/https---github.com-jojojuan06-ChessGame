'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('chesspieces', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      match_id: {
        //reference au model crée users (id)
        references:{
          model:'matches',
          //identifiant utilisateur
          key:'id'
        },
        type: Sequelize.UUID,
        allowNull: false,
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM('KING','QUEEN','BISHOP','ROOK','KNIGHT','PAWN')
      },
      color: {
        allowNull: false,
        type: Sequelize.ENUM('WHITE', 'BLACK')
      },
      x: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      y: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('chess_pieces');
  }
};