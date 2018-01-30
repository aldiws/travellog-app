'use strict';
module.exports = (sequelize, DataTypes) => {
  var Plan_Destination = sequelize.define('Plan_Destination', {
    PlanId: DataTypes.INTEGER,
    DestinationId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    JoinId: DataTypes.INTEGER,
    departureDate: DataTypes.STRING,
    endsDate: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Plan_Destination;
};