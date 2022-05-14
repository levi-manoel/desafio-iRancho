'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('animais', [{
      fk_id_pessoa:1,
      id_fazenda:1,
      no_animal:'Estrela',
      no_raca:'Raça das boa',
      sexo:'F',
      vr_peso:210.5,
      dt_nascimento:'2020/01/10'
    }, {
      fk_id_pessoa:1,
      id_fazenda:1,
      no_animal:'Mimosa',
      no_raca:'Raça das marromeno',
      sexo:'F',
      vr_peso:210.5,
      dt_nascimento:'2019/05/01'
    }, {
      fk_id_pessoa:2,
      id_fazenda:2,
      no_animal:'Zorobabel',
      no_raca:'Raça das boa',
      sexo:'F',
      vr_peso:210.5,
      dt_nascimento:'2020/01/10'
    }, {
      fk_id_pessoa:3,
      id_fazenda:3,
      no_animal:'Tirolito',
      no_raca:'Raça das boa',
      sexo:'F',
      vr_peso:210.5,
      dt_nascimento:'2020/01/10'
    }, {
      fk_id_pessoa:4,
      id_fazenda:4,
      no_animal:'Satero',
      no_raca:'Raça das boa',
      sexo:'F',
      vr_peso:210.5,
      dt_nascimento:'2020/01/10'
    }, {
      fk_id_pessoa:5,
      id_fazenda:5,
      no_animal:'Minguada',
      no_raca:'Raça das boa',
      sexo:'F',
      vr_peso:210.5,
      dt_nascimento:'2020/01/10'
    }]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('animais', null, {});

  }
};
