'use strict';

module.exports = {
  async up (queryInterface) {
   await queryInterface.bulkInsert('lotes', [{
      no_lote:'Lote Marinho',
      ds_lote:'Cedido pela família Marinho',
    }, {
      no_lote:'Lote Jhonssons',
      ds_lote:'Cedido pela família Jhonssons',
    }, {
      no_lote:'Lote Cristal',
      ds_lote:'Cedido pela família Cristal',
    }]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('lotes', null, {});
  }
};
