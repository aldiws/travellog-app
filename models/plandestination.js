'use strict';
module.exports = (sequelize, DataTypes) => {
  var PlanDestination = sequelize.define('PlanDestination', {
    PlanId: DataTypes.INTEGER,
    DestinationId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  });

  PlanDestination.associate = function (models) {
    PlanDestination.belongsTo(models.TravelingPlan, {
      foreignKey: 'PlanId'
    });
    PlanDestination.belongsTo(models.Destination, {
      foreignKey: 'DestinationId'
    });
  };

  return PlanDestination;
};