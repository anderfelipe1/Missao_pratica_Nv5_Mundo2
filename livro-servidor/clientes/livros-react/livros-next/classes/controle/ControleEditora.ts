import { Editora } from '../modelo/Editora';

export class ControleEditora {
    private editoras: Editora[] = [
        { codEditora: 1, nome: "Alta Books" },
        { codEditora: 2, nome: "Bookman" },
        { codEditora: 3, nome: "Addison Wesley" },
        { codEditora: 4, nome: "Pearson" }
    ];
  
    getEditoras(): Editora[] {
        return this.editoras;
    }
  
    getEditoraByCod(codEditora: number): Editora | undefined {
        return this.editoras.find(editora => editora.codEditora === codEditora);
    }
}

  