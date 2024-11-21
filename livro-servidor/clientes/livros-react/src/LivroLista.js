import React, { useState, useEffect } from 'react';
import { obterTodos, excluir } from './controladores/LivroController'; // Ajuste o caminho conforme necessário

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  // Alteração do useEffect para ser assíncrono
  useEffect(() => {
    obterTodos()
      .then(result => {
        setLivros(result);
        setCarregado(true); // A lista de livros é carregada
      })
      .catch(error => {
        console.error('Erro ao obter livros:', error);
        setCarregado(true); // Mesmo em caso de erro, a variável carregado é verdadeira
      });
  }, []);

  // Alteração do método excluir para chamar setCarregado após a exclusão
  const excluirLivro = (codigo) => {
    excluir(codigo)
      .then(resultado => {
        if (resultado) {
          setLivros(livros.filter(livro => livro.codigo !== codigo));
        }
        setCarregado(true); // Definir carregado como true após a exclusão
      })
      .catch(error => {
        console.error('Erro ao excluir livro:', error);
        setCarregado(true);
      });
  };

  return (
    <div>
      <h1>Lista de Livros</h1>
      {carregado ? (
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Resumo</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro, index) => (
              <LinhaLivro
                key={index}  // Usando index para key
                livro={livro}
                excluirLivro={excluirLivro}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p>Carregando livros...</p>
      )}
    </div>
  );
};

// Componente LinhaLivro
const LinhaLivro = ({ livro, excluirLivro }) => (
  <tr>
    <td>{livro.titulo}</td>
    <td>{livro.resumo}</td>
    <td>
      <button onClick={() => excluirLivro(livro.codigo)}>Excluir</button>
    </td>
  </tr>
);

export default LivroLista;
