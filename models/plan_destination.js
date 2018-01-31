'use strict';
module.exports = (sequelize, DataTypes) => {
  var Plan_Destination = sequelize.define('Plan_Destination', {
    PlanId: DataTypes.INTEGER,
    DestinationId: DataTypes.INTEGER,
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
    Plan_Destination.hasMany(models.Joiners_Plan,{
      foreignKey: 'Plan_DestinationsId'
    })
  }
  return Plan_Destination;
};