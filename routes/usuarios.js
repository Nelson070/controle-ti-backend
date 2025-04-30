const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nome: String,
  setor: String
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

router.get('/', async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
});

router.post('/', async (req, res) => {
  const novoUsuario = new Usuario(req.body);
  await novoUsuario.save();
  res.json(novoUsuario);
});

module.exports = router;