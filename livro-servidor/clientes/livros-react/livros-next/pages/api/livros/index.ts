import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivro } from '../../../classes/controle/ControleLivros';

const controleLivro = new ControleLivro(); // Instância do controlador de livros

// Exporte `controleLivro` para que possa ser usado em `[codigo].ts`
export { controleLivro };

export default (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            res.status(200).json(controleLivro.obterLivros());
            break;
        case 'POST':
            const livro = req.body;
            controleLivro.incluir(livro);
            res.status(201).json(livro);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
            break;
    }
};
