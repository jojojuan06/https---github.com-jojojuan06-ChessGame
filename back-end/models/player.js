'use strict';
const { uuid } = require('uuidv4')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // définir l'association ici a plusieur post (post)
        models.Player.belongsToMany(models.Match,
          //foreignkey une contrainte qui garantit l'intégrité référentielle entre deux tables
          { through: 'PlayerMatch' ,
            foreignKey: 'player_id',
            otherKey: 'match_id',
            onDelete: 'cascade',
            onUpdate: 'cascade'}
        ); 
      }
  }
  Player.init({
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      allowNull:false,
      defaultValue:() =>  uuid() ,
    },
    pseudo: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};