'use strict';
const { uuid } = require('uuidv4')
const {
  Model, UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // définir l'association ici a plusieur post (post)
      models.Match.belongsToMany(models.Player,
        //foreignkey une contrainte qui garantit l'intégrité référentielle entre deux tables
        { through: 'PlayerMatch' ,
          foreignKey: 'match_id',
          otherKey: 'player_id',
          onDelete: 'cascade',
          onUpdate: 'cascade'}
      ); 
      //a plusieurs
      models.Match.hasMany(models.ChessPiece,
        //foreignkey une contrainte qui garantit l'intégrité référentielle entre deux tables
        { 
          foreignKey: 'match_id',
          as: 'pieces',
          onDelete: 'cascade',
          onUpdate: 'cascade'}
      ); 
    }
  }
  Match.init({
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      allowNull:false,
      defaultValue:() =>  uuid() ,
    },
    public: {
      type:DataTypes.BOOLEAN,
      allowNull: false
    },
    winner_player_id: DataTypes.UUID,
    end_date: DataTypes.DATE,
    color_turn: {
      type:DataTypes.ENUM('WHITE','BLACK'),
      defaultValue:'WHITE'
    }
  }, {
    sequelize,
    modelName: 'Match',
  });
  return Match;
};