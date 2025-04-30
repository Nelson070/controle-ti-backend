const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/itens', require('./routes/itens'));
app.use('/api/usuarios', require('./routes/usuarios'));

// Conectar ao MongoDB usando variável de ambiente
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(process.env.PORT || 3000, () => console.log("Server running"));
    })
    .catch(err => console.error(err));