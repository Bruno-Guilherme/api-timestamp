import { Router } from "express";
const apiRouter = Router();

// Criar um timestamp
apiRouter.get("/api/:data", (req, res) => {
    res.json({entrada: entrou})
})
// Deletar um timestamp

export default apiRouter;