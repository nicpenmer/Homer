'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        firstName: 'Will',
        lastName: 'Nolon',
        userName: 'illnoan27',
        password:'somuch2na'
      }],
      [{
        firstName: 'Jack',
        lastName: 'Doe',
        userName: 'Will',
        password:'muchmore2'
      }],
      [{
        firstName: 'Frank',
        lastName: 'Lindon',
        userName: 'flindon12',
        password:'evenmore3'
      }], 
      [{
        firstName: 'Natalie',
        lastName: 'Imbruglia',
        userName: 'nImbruglia',
        password:'torn2'
      }], 
      [{
        firstName: 'Jason',
        lastName: 'Jalopy',
        userName: 'jJalopy',
        password:'moretorn'
      }], {}); 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

