'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    // return queryInterface.bulkInsert('Users', [{
    //   userName: "kevinhimawan",
    //   firstName: "Kevin",
    //   lastName: "Himawan",
    //   gender: "Male",
    //   email: "kevinhimawanhie@gmail.com",
    //   about_me: "",
    //   travel_style: "Open to collaboration to explore Indonesia",
    //   photo_profile: "img/kevin_himawan.jpeg",
    //   password: "kevinhimawan",
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userName: "aldiwijaya",
    //   firstName: "Aldi",
    //   lastName: "Wijaya",
    //   gender: "Male",
    //   email: "aldiwijaya@gmail.com",
    //   about_me: "",
    //   travel_style: "Open to collaboration to explore Indonesia",
    //   photo_profile: "img/brenda-4.jpg",
    //   password: "aldiwijaya",
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
