'use strict';
const { uuid } = require('uuidv4')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChessPiece extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // définir l'association ici a plusieur post (post)
      models.ChessPiece.belongsTo(models.Match,
        //foreignkey une contrainte qui garantit l'intégrité référentielle entre deux tables
        { 
          foreignKey: 'match_id',
          onDelete: 'cascade',
          onUpdate: 'cascade'}
      ); 
    }
  }
  ChessPiece.init({
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      allowNull:false,
      defaultValue:() =>  uuid() ,
    },
    match_id: {
      type:DataTypes.UUID,
      allowNull: false
    },
    type: {
      type:DataTypes.ENUM('KING','QUEEN','BISHOP','ROOK','KNIGHT','PAWN'),
      allowNull: false
    },
    color: {
      type:DataTypes.ENUM('WHITE', 'BLACK'),
      allowNull: false
    },
    x: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    y: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'ChessPiece',
  });
  return ChessPiece;
};