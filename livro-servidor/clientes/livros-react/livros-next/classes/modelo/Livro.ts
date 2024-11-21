export class Livro {
    codLivro: number;
    titulo: string;
    autor: string;

    constructor(codLivro: number, titulo: string, autor: string) {
        this.codLivro = codLivro;
        this.titulo = titulo;
        this.autor = autor;
    }
}
