const mongoose = require('mongoose'); // Importa o mongoose

// Configuração da conexão
mongoose.connect('mongodb://127.0.0.1:27017/Livraria', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado ao MongoDB'))
.catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

module.exports = mongoose; // Exporta o mongoose com a conexão configurada
