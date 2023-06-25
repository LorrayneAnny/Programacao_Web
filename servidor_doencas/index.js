const express = require('express');
const ControleDoencas = require('./app/controllers/ControleDoencas');
const controleDoencas = new ControleDoencas();
const ControleMedicamento = require('./app/controllers/ControleMedicamento');
const controleMedicamento = new ControleMedicamento();
const ControleUsuarios = require('./app/controllers/ControleUsuarios');
const controleUsuarios = new ControleUsuarios();
const app = express();


app.use(express.json());

app.get('/', function(req, res) {
  res.send('Bem-vindo!');
});

app.get('/api/diseases', (req, res) => controleDoencas.findAll(req, res));

app.post('/api/diseases', (req, res) => controleDoencas.create(req, res));
app.get('/api/diseases/:id', (req, res) => controleDoencas.findById(req, res));
app.put('/api/diseases/:id', (req, res) => controleDoencas.update(req, res));
app.delete('/api/diseases/:id', (req, res) => controleDoencas.delete(req, res));

app.get('/api/medicamentos', (req, res) => controleMedicamento.findAll(req, res));
app.post('/api/medicamentos', (req, res) => controleMedicamento.create(req, res));
app.get('/api/medicamentos/:id', (req, res) => controleMedicamento.findById(req, res));
app.put('/api/medicamentos/:id', (req, res) => controleMedicamento.update(req, res));
app.delete('/api/medicamentos/:id', (req, res) => controleMedicamento.delete(req, res));

app.post('/api/usuarios', (req, res) => controleUsuarios.criar(req, res));
app.get('/api/usuarios', (req, res) => controleUsuarios.logar(req, res));

app.listen(3030, function() {
  console.log('Servidor rodando na porta 3030');
});
