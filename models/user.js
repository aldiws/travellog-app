'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    userName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    about_me: DataTypes.STRING,
    travel_style: DataTypes.STRING,
    photo_profile: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  User.associate = function(models){
    User.hasMany(models.Plan,{
      foreignKey: 'UserId'
    });

    User.hasMany(models.Joiners_Plan,{
      foreignKey: 'JoinId'
    })   

    User.hasMany(models.Plan_Destination,{
      foreignKey: 'UserId'
    })
  }

  User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
  }

  return User;
};