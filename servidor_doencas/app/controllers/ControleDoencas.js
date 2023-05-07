
const { Doencas } = require('../models');

class ControleDoencas{
    constructor() {
      // Inicialize as propriedades da classe, se necessário
    }
  
    async findAll (req, res) {
        try {
            const doencas = await Doencas.findAll();
            res.status(200).json(doencas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const id = req.params.id;
            const doenca = await Doencas.findByPk(id);

            if (doenca) {
                res.status(200).json(doenca);
            } else {
                res.status(404).json({ error: 'Doenca not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
  
    async create(req, res) {
        try {
            const newItem = await Doencas.create(req.body);
            res.status(201).json(newItem);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const [updatedRows] = await Doencas.update(req.body, {
                where: { id },
            });

            if (updatedRows) {
                res.status(200).json({ message: 'Doencas updated successfully' });
            } else {
                res.status(404).json({ error: 'Doencas not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const deletedRows = await Doencas.destroy({
                where: { id },
            });

            if (deletedRows) {
                res.status(200).json({ message: 'Doencas deleted successfully' });
            } else {
                res.status(404).json({ error: 'Doencas not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
  
  }
  
  module.exports = ControleDoencas;