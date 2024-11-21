import { useRouter } from 'next/router';
import { useState } from 'react';
import ControleLivros from 'controle/ControleLivros';

 // Ajuste conforme o seu caminho
 // Verifique o caminho correto para o ControleLivros

const Livros = () => {
  const router = useRouter();
  const controleLivros = new ControleLivros();
  
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [ano, setAno] = useState('');

  const incluirLivro = () => {
    const livro = {
      codigo: '', // Texto vazio para o código
      titulo,
      autor,
      ano: parseInt(ano),
    };

    controleLivros.incluir(livro)
      .then(() => {
        router.push('/livros'); // Redireciona para a lista de livros após inclusão
      })
      .catch((error: any) => {
        console.error('Erro ao incluir livro:', error);
      });
  };

  return (
    <div>
      <h1>Adicionar Livro</h1>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Autor"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
      />
      <input
        type="number"
        placeholder="Ano"
        value={ano}
        onChange={(e) => setAno(e.target.value)}
      />
      <button onClick={incluirLivro}>Adicionar</button>
    </div>
  );
};

export default Livros;
