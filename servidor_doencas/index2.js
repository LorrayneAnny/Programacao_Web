
const express = require('express');
const app = express();
const port = 3030;

app.use(express.json());

let diseases = [    { id: 1, name: 'Gripe', description: 'Doença respiratória aguda', symptoms: ['febre', 'tosse', 'dor de cabeça'], treatment: 'Hidratação e repouso' },
    { id: 2, name: 'Dengue', description: 'Doença viral transmitida por mosquito', symptoms: ['febre alta', 'dores no corpo', 'manchas na pele'], treatment: 'Hidratação e repouso' },
    { id: 3, name: 'COVID-19', description: 'Doença infecciosa causada pelo coronavírus', symptoms: ['febre', 'tosse seca', 'falta de ar'], treatment: 'Isolamento e cuidados médicos' }
];




app.get('/', (req, res) =>{
    res.send('Welcome!!')
})

/*Rota GET '/api/diseases'
Descrição: Recupera a lista de doenças cadastradas.
Método: GET*/
app.get('/api/diseases', (req, res) => {
    res.send(diseases);
});

/*Rota POST '/api/diseases'
Descrição: Cria uma nova doença.
Método: POST*/
app.post('/api/diseases', (req, res) => {
    const disease = req.body;
    disease.id = diseases.length + 1;
    diseases.push(disease);
    res.send({
        inputs: disease
    });
});

/*Rota GET '/api/diseases/:id'
Descrição: Recupera informações detalhadas de uma doença específica a partir do seu ID.
Método: GET
Parâmetros:
id (número inteiro) - ID da doença a ser recuperada.*/
app.get('/api/diseases/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const disease = diseases.find(d => d.id === id);
    if (!disease) res.status(404).send('Doença não encontrada.');
    res.send({
        inputs: disease
    });
});

/*Rota PUT '/api/diseases/:id'
Descrição: Atualiza informações de uma doença específica a partir do seu ID.

Método: PUT

Parâmetros:

id (número inteiro) - ID da doença a ser atualizada.
Corpo da requisição:

O corpo da requisição deve conter um objeto JSON com as informações a serem atualizadas. As informações que podem ser atualizadas são:

name (string) - Nome da doença.
description (string) - Descrição da doença.
symptoms (array de strings) - Sintomas da doença.
treatment (string) - Tratamento da doença.*/

app.put('/api/diseases/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const disease = diseases.find(d => d.id === id);
    if (!disease) res.status(404).send('Doença não encontrada.');

    disease.name = req.body.name;
    disease.description = req.body.description;
    disease.symptoms = req.body.symptoms;
    disease.treatment = req.body.treatment;

    res.send({
        inputs: disease
    });
});

/*Rota DELETE '/api/diseases/:id'
Descrição: Exclui uma doença específica a partir do seu ID.

Método: DELETE

Parâmetros:

id (número inteiro) - ID da doença a ser excluída.*/
app.delete('/api/diseases/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const disease = diseases.find(d => d.id === id);
    if (!disease) res.status(404).send('Doença não encontrada.');

    const index = diseases.indexOf(disease);
    diseases.splice(index, 1);

    res.send({
        inputs: disease
    });
});

app.delete('/api/diseasesall', (req, res) =>{
    diseases = [{}]
    res.status(200).send('Tudo deletado!!')
})


// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});