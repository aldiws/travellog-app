'use strict';
module.exports = (sequelize, DataTypes) => {
  var TravelingPlan = sequelize.define('TravelingPlan', {
    title: DataTypes.STRING,
    plan_description: DataTypes.STRING,
    depature_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    destination_number: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  });

  TravelingPlan.associate = function (models) {

    TravelingPlan.belongsTo(models.User, {
      foreignKey: 'UserId'
    });

    //one to many
    TravelingPlan.hasMany(models.PlanDestination, {
      foreignKey: 'PlanId'
    });

    // many to many
    TravelingPlan.belongsToMany(models.Destination, {
      through: 'PlanDestination',
      foreignKey: 'PlanId'
    })

  }

  return TravelingPlan;
};