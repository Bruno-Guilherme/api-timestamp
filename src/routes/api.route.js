import { Router } from "express";

const apiRouter = Router();

// Pegar os 5 primeiros
apiRouter.get("/", (req, res) => {
    res.send("Entrou!")
})

// Criar um timestamp
apiRouter.post("/api/:data", (req, res) => {
    
})
// Deletar um timestamp

export default apiRouter;