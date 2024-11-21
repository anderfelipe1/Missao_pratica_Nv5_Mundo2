import { controleLivro } from './index';
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'DELETE') {
        const codigo = parseInt(req.query.codigo as string);
        controleLivro.excluir(codigo);
        res.status(200).json({ message: 'Livro excluído com sucesso' });
    } else {
        res.setHeader('Allow', ['DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
