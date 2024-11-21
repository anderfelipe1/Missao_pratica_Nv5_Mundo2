const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

const baseURL = 'http://localhost:3030/livros';  // Substitua com o URL correto da sua API

// Função para obter todos os livros
const obterLivros = async () => {
  const resposta = await fetch(baseURL, { method: 'GET' });
  const livros = await resposta.json();
  return livros.map(livro => ({
    codigo: livro._id,
    titulo: livro.titulo,
    resumo: livro.resumo,
    codEditora: livro.codEditora,
  }));
};

// Função para incluir um novo livro
const incluir = async (livro) => {
  const resposta = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(livro),
  });
  const resultado = await resposta.json();
  return resultado.ok;
};

// Função para excluir um livro
const excluir = async (codigo) => {
  const resposta = await fetch(`${baseURL}/${codigo}`, {
    method: 'DELETE',
  });
  const resultado = await resposta.json();
  return resultado.ok;
};

// Rota GET para listar livros
router.get('/', async (req, res, next) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (error) {
    next(error);
  }
});

// Rota POST para incluir um novo livro
router.post('/', async (req, res, next) => {
  try {
    const livro = req.body;
    const sucesso = await incluir(livro);
    if (sucesso) {
      res.status(201).json({ message: 'Livro incluído com sucesso.' });
    } else {
      res.status(400).json({ message: 'Erro ao incluir livro.' });
    }
  } catch (error) {
    next(error);
  }
});

// Rota DELETE para excluir um livro
router.delete('/:codigo', async (req, res, next) => {
  try {
    const codigo = req.params.codigo;
    const sucesso = await excluir(codigo);
    if (sucesso) {
      res.status(200).json({ message: 'Livro excluído com sucesso.' });
    } else {
      res.status(400).json({ message: 'Erro ao excluir livro.' });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
