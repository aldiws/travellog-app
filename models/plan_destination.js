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
    

  });
  Plan_Destination.associate = function(models){
    Plan_Destination.belongsTo(models.Plan,{
      foreignKey: 'PlanId'
    })
    Plan_Destination.belongsTo(models.Destination,{
      foreignKey: 'DestinationId'
    })
  }
  return Plan_Destination;
};