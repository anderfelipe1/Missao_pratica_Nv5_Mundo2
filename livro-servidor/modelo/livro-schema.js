const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const livroSchema = new Schema({
  codEditora: String,
  titulo: String,
  resumo: String
});

// Evita sobrescrever o modelo
const Livro = mongoose.models.Livro || mongoose.model('Livro', livroSchema);

module.exports = Livro;
