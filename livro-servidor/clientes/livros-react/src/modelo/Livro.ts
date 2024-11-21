export class Livro {
  codigo: string;
  titulo: string;
  autor: string;
  ano: number;

  constructor(codigo: string, titulo: string, autor: string, ano: number) {
    this.codigo = codigo;
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }
}
