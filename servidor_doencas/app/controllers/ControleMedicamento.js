
const { Medicamento } = require('../models');

class ControleMedicamento{
    constructor() {
      // Inicialize as propriedades da classe, se necessário
    }
  
    async findAll (req, res) {
        try {
            const medicamento = await Medicamento.findAll();
            res.status(200).json(medicamento);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const id = req.params.id;
            const medicamento = await Medicamento.findByPk(id);

            if (medicamento) {
                res.status(200).json(medicamento);
            } else {
                res.status(404).json({ error: 'Medicamento not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
  
    async create(req, res) {
        try {
            const newItem = await Medicamento.create(req.body);
            res.status(201).json(newItem);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const [updatedRows] = await Medicamento.update(req.body, {
                where: { id },
            });

            if (updatedRows) {
                res.status(200).json({ message: 'Medicamento updated successfully' });
            } else {
                res.status(404).json({ error: 'Medicamento not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const deletedRows = await Medicamento.destroy({
                where: { id },
            });

            if (deletedRows) {
                res.status(200).json({ message: 'Medicamento deleted successfully' });
            } else {
                res.status(404).json({ error: 'Medicamento not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
  
  }
  
  module.exports = ControleMedicamento;