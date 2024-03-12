import { Router } from "express";
import apiController from "../controllers/api.controller.js"
const apiRouter = Router();

// Criar um timestamp
apiRouter.get("/:data", apiController.roteamentoURL);
// Deletar um timestamp

export default apiRouter;