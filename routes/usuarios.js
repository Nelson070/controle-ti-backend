const express = require('express');
const router = express.Router();

// Lista simulada vazia (pode ser substituída por banco futuramente)
let usuarios = [];

// GET - listar todos os usuários
router.get('/', (req, res) => {
  res.json(usuarios);
});

// POST - cadastrar novo usuário
router.post('/', (req, res) => {
  const novoUsuario = { _id: Date.now().toString(), ...req.body };
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

// DELETE - excluir usuário por ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const antes = usuarios.length;
  usuarios = usuarios.filter(u => u._id !== id);
  const depois = usuarios.length;

  if (antes === depois) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  res.sendStatus(204);
});

module.exports = router;
