'use strict';
module.exports = (sequelize, DataTypes) => {
  var Joiners_Plan = sequelize.define('Joiners_Plan', {
    JoinId: DataTypes.INTEGER,
    Plan_DestinationsId: DataTypes.INTEGER,
    departureDate: DataTypes.STRING,
    endsDate: DataTypes.STRING,
    status:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Joiners_Plan.associate = function(models){
    Joiners_Plan.belongsTo(models.User,{
      foreignKey: 'JoinId'
    })
    Joiners_Plan.belongsTo(models.Plan_Destination,{
      foreignKey: 'Plan_DestinationsId'
    })
  }
  return Joiners_Plan;
};