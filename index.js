const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Conectado ao MongoDB'))
.catch((err) => console.error('❌ Erro na conexão:', err));

// Rotas
const produtosRoutes = require('./routes/itens');
app.use('/itens', produtosRoutes);

app.delete("/itens/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const produto = await Produto.findByIdAndDelete(id);

    if (!produto) {
      return res.status(404).send({ mensagem: "Item não encontrado." });
    }

    res.send({ mensagem: "Item deletado com sucesso." });
  } catch (erro) {
    res.status(500).send({ erro: "Erro ao deletar Item." });
  }
});

// Rota base
app.get('/', (req, res) => {
  res.send('API CIM está no ar 🚀');
});

app.listen(PORT, () => console.log(`🔥 Servidor rodando na porta ${PORT}`));