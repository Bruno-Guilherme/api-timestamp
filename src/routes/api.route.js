import { Router } from "express";
import apiController from "../controllers/api.controller.js"
import entradasMDW from "../middlewares/api.middleware.js";

const apiRouter = Router();

// Criar um timestamp
// apiRouter.get("/", apiController.consultaClient)
apiRouter.get("/:data", entradasMDW, apiController.roteamentoURL).post("/", (req, res) => {
    console.log("Entrou")
});
// Deletar um timestamp

export default apiRouter;