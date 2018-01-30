'use strict';
module.exports = (sequelize, DataTypes) => {
  var Plan = sequelize.define('Plan', {
    title: DataTypes.STRING,
    planDescription: DataTypes.STRING,
    departureDate: DataTypes.STRING,
    endsDate: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Plan.associate = function (models){
    // Many to One
    Plan.belongsTo(models.User,{
      foreignKey: 'UserId'
    });
    // One to Many
    Plan.hasMany(models.Plan_Destination,{
      foreignKey: 'PlanId',
    })

    // Many to Many
    Plan.belongsToMany(models.Destination,{
      through: 'Plan_Destination',
      foreignKey: 'PlanId',
    })
  }
  
  return Plan;
};