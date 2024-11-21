import { Livro } from '../modelo/Livro'; // Importa a classe Livro

// Define um array de livros com três elementos
const livros: Array<Livro> = [
    new Livro(1, "O Senhor dos Anéis", "J.R.R. Tolkien"),
    new Livro(2, "1984", "George Orwell"),
    new Livro(3, "Dom Casmurro", "Machado de Assis")
];

export class ControleLivro {
    obterLivros() {
        return livros; // Retorna o vetor de livros
    }

    incluir(livro: Livro) {
        // Incrementa o código do novo livro
        livro.codLivro = Math.max(...livros.map(l => l.codLivro)) + 1;
        livros.push(livro); // Adiciona o novo livro ao vetor
    }

    excluir(codLivro: number) {
        const index = livros.findIndex(l => l.codLivro === codLivro); // Encontra o índice do livro
        if (index !== -1) {
            livros.splice(index, 1); // Remove o livro do vetor
        }
    }
}
