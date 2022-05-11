'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('pessoas', [{
      no_pessoa: 'Levi Manoel',
      no_email: 'levimanoel.deob@gmail.com',
      endereco: 'Rua Sebastião do Gás, 43',
      sexo: 'M',
      ic_ativo: true
    }, {
      no_pessoa: 'Lucas Manoel',
      no_email: 'lucas.cabj7@gmail.com',
      endereco: 'Rua do Trevo, 122',
      sexo: 'M',
      ic_ativo: true
    }, {
      no_pessoa:'Luciano Cássio',
      no_email:'cassioleto@gmail.com',
      endereco: 'Rua do Chorão, 89',
      sexo:'M',
      ic_ativo: false
    }, {
      no_pessoa:'Manoel Messias',
      no_email:'messiaseloide@gmail.com',
      endereco: 'Rua Dona Santa, 20',
      sexo:'M',
      ic_ativo:false
    }, {
      no_pessoa:'Lóide Eulália',
      no_email:'loide.eulalia@gmail.com',
      endereco: 'Rua Dona Santa, 20',
      sexo:'F',
      ic_ativo:true
    }]);
  },

  down: async (queryInterface) => {
        await queryInterface.bulkDelete('pessoas', null, {});
  }
};
