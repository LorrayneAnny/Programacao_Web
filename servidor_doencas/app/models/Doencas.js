const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Doencas = sequelize.define('Doencas', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sintomas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 tratamento: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Doencas;
