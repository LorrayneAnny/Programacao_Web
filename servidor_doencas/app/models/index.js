const sequelize = require('../../database');
const Doencas = require('./Doencas');
const Medicamento = require('./Medicamento');
const Usuarios = require('./Usuarios');


const models = {
  Doencas, Medicamento, Usuarios
};
// Relacionamentos
Medicamento.belongsTo(Doencas, {foreignKey: 'id_doenca', as: 'doenca'});
Doencas.hasMany(Medicamento, {foreignKey: 'id_doenca', as: 'medicamento'});

sequelize.sync({ alter: true });

module.exports = models;