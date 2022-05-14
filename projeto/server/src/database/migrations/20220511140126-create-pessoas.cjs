'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('pessoas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      no_pessoa: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      no_email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      endereco: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      sexo: {
        allowNull: false,
        type: DataTypes.ENUM('M', 'F'),
      },
      ic_ativo: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('pessoas');
  }
};
