'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('animais_lotes', [{
      fk_id_animal:1,
      fk_id_lote:1,
      dt_entrada:'2020/01/10',
      dt_saida:'2020/02/10',
      dt_ultima_movimentacao:'2020/01/20',
      ic_bezerro:true,
    }, {
      fk_id_animal:2,
      fk_id_lote:1,
      dt_entrada:'2020/01/10',
      dt_saida:'2020/02/10',
      dt_ultima_movimentacao:'2020/01/20',
      ic_bezerro:true,
    }, {
      fk_id_animal:3,
      fk_id_lote:2,
      dt_entrada:'2020/01/10',
      dt_saida:'2020/02/10',
      dt_ultima_movimentacao:'2020/01/20',
      ic_bezerro:false,
    }, {
      fk_id_animal:4,
      fk_id_lote:1,
      dt_entrada:'2020/01/10',
      dt_saida:'2020/02/10',
      dt_ultima_movimentacao:'2020/01/20',
      ic_bezerro:true,
    }, {
      fk_id_animal:5,
      fk_id_lote:3,
      dt_entrada:'2020/01/10',
      dt_saida:'2020/02/10',
      dt_ultima_movimentacao:'2020/01/20',
      ic_bezerro:false,
    }, {
      fk_id_animal:6,
      fk_id_lote:3,
      dt_entrada:'2020/01/10',
      dt_saida:'2020/02/10',
      dt_ultima_movimentacao:'2020/01/20',
      ic_bezerro:true,
    }, ]);
  },

  async down (queryInterface) {
     await queryInterface.bulkDelete('animais_lotes', null, {});
  }
};
