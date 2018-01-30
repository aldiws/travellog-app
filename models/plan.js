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
  }
  
  return Plan;
};