import { Router } from "express";
// Configuração do __dirname
import path from 'path';
import { fileURLToPath } from 'url';

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    const currentDir = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(currentDir, '../../index.html');
    res.sendFile(filePath);
})

export default indexRouter;