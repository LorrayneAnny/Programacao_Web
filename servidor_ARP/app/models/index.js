const sequelize = require('../../database');

const Pacientes = require('./Pacientes');
const Agendas = require('./Agendas');
const Usuarios = require('./Usuarios');


const modelos = {
    Pacientes,
    Agendas,
    Usuarios
};


// Relations
Pacientes.hasMany(Agendas, {foreignKey: 'idPaciente', as: 'agendas'});
Agendas.belongsTo(Pacientes, {foreignKey: 'idPaciente', as: 'paciente'});


sequelize.sync({ alter: true });

module.exports = modelos;