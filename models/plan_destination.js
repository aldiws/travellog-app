'use strict';
module.exports = (sequelize, DataTypes) => {
  var Plan_Destination = sequelize.define('Plan_Destination', {
    PlanId: DataTypes.INTEGER,
    DestinationId: DataTypes.INTEGER,
    departureDate: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          argv:true,
          msg: "make sure date not empty" 
        }
      }
    },
    endsDate: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          argv:true,
          msg: "make sure date not empty"
        }
      }
    },
    UserId:DataTypes.INTEGER
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

    Plan_Destination.belongsTo(models.User,{
      foreignKey: 'UserId'
    })
  }
  return Plan_Destination;
};