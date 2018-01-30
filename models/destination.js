'use strict';
module.exports = (sequelize, DataTypes) => {
  var Destination = sequelize.define('Destination', {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    country: DataTypes.STRING,
    province: DataTypes.STRING,
    specificLocation: DataTypes.STRING,
    description: DataTypes.TEXT,
    photo: DataTypes.STRING
  });

  Destination.associate = function (models) {

    //one to many
    Destination.hasMany(models.PlanDestination, {
      foreignKey: 'DestinationId'
    });

    // many to many
    Destination.belongsToMany(models.TravelingPlan, {
      through: 'PlanDestination',
      foreignKey: 'DestinationId'
    })

  }

  return Destination;
};