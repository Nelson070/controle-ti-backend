const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/itens', require('./routes/itens'));
app.use('/api/usuarios', require('./routes/usuarios'));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB conectado');
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
}).catch(err => console.error('Erro MongoDB:', err));