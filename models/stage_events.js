'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage_events extends Model {
    static associate(models) {
    }
  }
  Stage_events.init({
    stage_events_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    stage_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    event_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'stage_events',
    timestamps: false,
  });
  return Stage_events;
};