import { NextApiRequest, NextApiResponse } from "next";
import { ControleEditora } from "../../../classes/controle/ControleEditora";

const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const codEditora = parseInt(req.query.codEditora as string);
    const editora = controleEditora.getEditoraByCod(codEditora);

    if (editora) {
      res.status(200).json(editora);
    } else {
      res.status(404).json({ error: "Editora não encontrada" });
    }
  } else {
    res.status(405).end(); // Método não permitido
  }
};
