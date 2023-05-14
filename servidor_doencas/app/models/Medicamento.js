const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Medicamento = sequelize.define('Medicamento', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  fabricante: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_doenca: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Doencas',
      key: 'id'
    }
  }
});

module.exports = Medicamento;
