const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('doencas', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
 