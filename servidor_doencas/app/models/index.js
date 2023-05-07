const sequelize = require('../../database');
const Doencas = require('./Doencas');
const Medicamento = require('./Medicamento');

const models = {
  Doencas, Medicamento
};

sequelize.sync({ alter: true });

module.exports = models;