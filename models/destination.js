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
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Destination.associate = function(models){
    Destination.hasMany(models.Plan_Destination,{
      foreignKey: 'DestinationId'
    })

    Destination.belongsToMany(models.Plan,{
      through: 'Plan_Destination',
      foreignKey: 'DestinationId'
    })
  }
  return Destination;
};
