'use strict';
module.exports = (sequelize, DataTypes) => {
  var Plan = sequelize.define('Plan', {
    title: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Make sure title not empty'
        }
      }
    },
    planDescription: DataTypes.STRING,
    departureDate: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:'Please input date'
        }
      }
    },
    endsDate: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:'Please input date'
        }
      }
    },
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

  Plan.beforeCreate((user, options) => {
    user.title = user.title.toLowerCase()
    console.log(user)
  });
  

  
  return Plan;
};