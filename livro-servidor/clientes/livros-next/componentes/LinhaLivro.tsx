// src/componentes/LinhaLivro.tsx

import React from 'react';

interface Livro {
    id: number;
    titulo: string;
    autor: string;
    ano: number;
}

interface LinhaLivroProps {
    livro: Livro;
}

const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro }) => {
    return (
        <tr>
            <td>{livro.id}</td>
            <td>{livro.titulo}</td>
            <td>{livro.autor}</td>
            <td>{livro.ano}</td>
        </tr>
    );
};

export default LinhaLivro;
