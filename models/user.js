'use strict';
const bcrypt = require('bcrypt');
const Op = require('sequelize').Op

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'first name not cannot empty.'
        },
        is: {
          args: ["^[a-z]+$", 'i'],
          msg: 'first name must a-z.'
        },
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'last name not cannot empty.'
        },
      }
    },
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "wrong format email"
        },
        notEmpty: {
          msg: 'Email not null'
        },
        isUnique: function (value, next) {
          User.find({
              where: {
                email: value,
                id: {
                  [Op.ne]: this.id
                }
              }
            })
            .then(function (result) {
              if (result === null) {
                return next()
              } else {
                return next(' Email already use')
              }
            })
            .catch(err => {
              return next()
            })
        }
      }
    },
    about_me: DataTypes.STRING,
    travel_style: DataTypes.STRING,
    photo_profile: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Make sure password not empty'
        },
      }
    }
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        return bcrypt.hash(user.password, 10)
          .then((hash) => {
            user.password = hash
          })
      },
      beforeUpdate: (user, options) => {
        return bcrypt.hash(user.password, 10)
          .then((hash) => {
            user.password = hash
          })
      }
    },
    instanceMethods: {
      comparePassword: function (userPassword, callback) {
        bcrypt.compare(userPassword, this.password)
          .then((isMatch) => {
            callback(isMatch)
          })
      }
    }
  });

  User.hook('beforeCreate', (user, options) => {
    user.username = user.username.toLowerCase();
  });

  User.prototype.check_password = function (userPassword, callback) {
    bcrypt.compare(userPassword, this.password)
      .then((isMatch) => {
        callback(isMatch)
      })
      .catch((err) => {
        callback(err)
      })
  };

  User.prototype.full_name = function () {
    return (`${this.first_name} ${this.last_name}`)
  };

  User.associate = function (models) {
    //one to many
    User.hasMany(models.TravelingPlan, {
      foreignKey: 'UserId'
    });    
    
  }

  return User;
};