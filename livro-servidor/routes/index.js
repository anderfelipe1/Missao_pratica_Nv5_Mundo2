const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Inicializando o app
const app = express();
app.use(express.json());

// Conectando ao MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Livraria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
})
.then(() => console.log('Conexão com MongoDB estabelecida.'))
.catch((err) => console.error('Erro ao conectar no MongoDB:', err));

// Modelo de exemplo
const livroSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
    codigo: String,
});

const Livro = mongoose.model('Livro', livroSchema);

// Rotas
app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor!');
});

// Rota para listar livros
app.get('/livros', async (req, res) => {
    try {
        const livros = await Livro.find();
        res.json(livros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livros.' });
    }
});

// Rota para adicionar um novo livro
app.post('/livros', async (req, res) => {
    try {
        const novoLivro = new Livro(req.body);
        await novoLivro.save();
        res.status(201).json(novoLivro);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao adicionar livro.' });
    }
});

// Rota para excluir um livro por código
app.delete('/livros/:codigo', async (req, res) => {
    try {
        const resultado = await Livro.deleteOne({ codigo: req.params.codigo });
        if (resultado.deletedCount > 0) {
            res.json({ ok: true });
        } else {
            res.status(404).json({ error: 'Livro não encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir livro.' });
    }
});

// Iniciando o servidor
app.listen(3030, () => {
    console.log('Servidor rodando em http://localhost:3030');
});

module.exports = router;
