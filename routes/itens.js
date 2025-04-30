const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  nome: String,
  tipo: String,
  numero_serie: String,
  setor_id: String,
  usuario_id: String,
  usuario_nome: String,
  data: String,
  observacoes: String,
  status: String
});

const Item = mongoose.model('Item', ItemSchema);

router.get('/', (req, res) => {
  res.json([
    { nome: "Notebook Dell", status: "Em uso" },
    { nome: "Mouse Logitech", status: "Disponível" }
  ]);
});

router.post('/', async (req, res) => {
  const novoItem = new Item(req.body);
  await novoItem.save();
  res.json(novoItem);
});

router.put('/:id', async (req, res) => {
  const atualizado = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(atualizado);
});

router.delete('/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});


module.exports = router;