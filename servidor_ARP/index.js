// Incluindo express
const express = require('express');
const app = express();

// Incluindo controllers
const ControlePaciente = require('./app/controllers/ControlePaciente');
const controlePaciente = new ControlePaciente();

const ControleAgenda = require('./app/controllers/ControleAgenda');
const controleAgenda = new ControleAgenda();


//Definindo a comunicação via arquivo Json
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome');
});

//Criando as rotas para os  Pacientes
app.get('/pacientes', (req, res) => controlePaciente.listarPacientes(req, res));
app.get('/pacientes/:id', (req, res) => controlePaciente.paciente(req, res));
app.post('/pacientes', (req, res) => controlePaciente.criarPaciente(req, res));
app.put('/pacientes/:id', (req, res) => controlePaciente.atualizar(req, res));
app.delete('/pacientes/:id', (req, res) => controlePaciente.deletar(req, res));

//Criando as rotas para as agendas
app.get('/agendas', (req, res) => controleAgenda.listarAgendas(req, res));
app.get('/agendas/:id', (req, res) => controleAgenda.agenda(req, res));
app.post('/agendas', (req, res) => controleAgenda.criarAgenda(req, res));
app.put('/agendas/:id', (req, res) => controleAgenda.atualizar(req, res));
app.delete('/agendas/:id', (req, res) => controleAgenda.deletar(req, res));


// Definindo a porta para a API
app.listen(3030, (req, res) => {
    console.log('listening on port 3030');
});