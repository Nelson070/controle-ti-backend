const express = require('express');
const router = express.Router();

// Simulando dados em memória (troque por MongoDB depois)
let usuarios = [
  { _id: "1", nome: "João", setor: "TI" },
  { _id: "2", nome: "Maria", setor: "RH" }
];

// GET - listar usuários
router.get('/', (req, res) => {
  res.json(usuarios);
});

// POST - cadastrar novo usuário
router.post('/', (req, res) => {
  const novoUsuario = { _id: Date.now().toString(), ...req.body };
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

module.exports = router;
