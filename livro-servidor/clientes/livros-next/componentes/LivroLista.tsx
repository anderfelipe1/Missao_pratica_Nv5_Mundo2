import React from 'react';

// Definindo a interface Livro
interface Livro {
  titulo: string;
  autor: string;
  ano: number;
}

// Componente LivroLista que recebe 'result' e 'error' como props
const LivroLista = ({ result, error }: { result: Livro[]; error: string }) => {
  return (
    <div>
      {error && <div>{error}</div>}
      {result.map((livro, index) => (
        <div key={index}>
          <h3>{livro.titulo}</h3>
          <p>{livro.autor}</p>
          <p>{livro.ano}</p>
        </div>
      ))}
    </div>
  );
};

export default LivroLista;
