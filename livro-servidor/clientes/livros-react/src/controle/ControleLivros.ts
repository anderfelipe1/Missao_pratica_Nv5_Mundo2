import { Livro } from '../modelo/Livro';

const baseURL = "http://localhost:3030/livros";


interface LivroMongo {
  _id: string | null; // O MongoDB usa o _id como identificador único
  codEditora: number; // O código da editora, que é um número
  titulo: string; // O título do livro
  resumo: string; // O resumo do livro
  autores: string[]; // Lista de autores como array de strings
}


const livro: LivroMongo = {
  _id: '123abc',
  codEditora: 1,  // valor do tipo number
  titulo: 'Título do Livro',  // valor do tipo string
  resumo: 'Resumo do livro aqui...',  // valor do tipo string
  autores: ['Autor 1', 'Autor 2'],  // valor do tipo string[]
};


export class ControleLivros {
  async obterLivros(): Promise<Livro[]> {
    const response = await fetch(baseURL, { method: "GET" });
    const data = await response.json();
    return data.map((livroMongo: any) => 
      new Livro(livroMongo.codigo, livroMongo.titulo, livroMongo.autor, livroMongo.ano)
    );
  }

  async excluir(codigo: string): Promise<boolean> {
    const response = await fetch(`${baseURL}/${codigo}`, { method: "DELETE" });
    return response.ok;
  }

  async incluir(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = {
      ...livro,
      _id: null,
      codEditora: 0,
      resumo: '',
      autores: []
    };
    const response = await fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(livroMongo),
    });
    return response.ok;
  }
}

