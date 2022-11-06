'use strict';
const { uuid } = require('uuidv4')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlayerMatch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PlayerMatch.init({
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      allowNull:false,
      defaultValue:() =>  uuid() ,
    },
    player_id: {
      type:DataTypes.UUID,
      allowNull: false
    },
    match_id: {
      type:DataTypes.UUID,
      allowNull: false
    },
    player_color: {
      type:DataTypes.ENUM('WHITE','BLACK'),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'PlayerMatch',
  });
  return PlayerMatch;
};