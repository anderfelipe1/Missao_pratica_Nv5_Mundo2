import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { incluir } from './controladores/LivroController'; // Ajuste o caminho conforme necessário

const LivroDados = () => {
  const [livro, setLivro] = useState({
    codigo: '', // Código alterado para texto vazio
    titulo: '',
    resumo: '',
  });

  const navigate = useNavigate();

  // Função para incluir o livro
  const incluirLivro = () => {
    incluir(livro)
      .then(resultado => {
        // Redireciona para a raiz após inclusão
        if (resultado) {
          navigate('/');
        }
      })
      .catch(error => {
        console.error('Erro ao incluir livro:', error);
      });
  };

  // Atualiza o estado do livro conforme o formulário é preenchido
  const handleChange = (e) => {
    setLivro({
      ...livro,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Incluir Livro</h1>
      <form onSubmit={(e) => { e.preventDefault(); incluirLivro(); }}>
        <div>
          <label>Título</label>
          <input
            type="text"
            name="titulo"
            value={livro.titulo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Resumo</label>
          <input
            type="text"
            name="resumo"
            value={livro.resumo}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Incluir</button>
      </form>
    </div>
  );
};

export default LivroDados;

