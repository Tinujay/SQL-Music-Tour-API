'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_Greet extends Model {
    static associate(models) {
    }
  }
  Meet_Greet.init({
    band_id: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    meet_greet_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    event_id: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
  
    available_start_time: {
      type:DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type:DataTypes.DATE,
      allowNull: false
    }
  },
   {
    sequelize,
    modelName: 'Meet_Greet',
    tableName: 'meet_greet',
    timestamps: false
  });
  return Meet_Greet;
};