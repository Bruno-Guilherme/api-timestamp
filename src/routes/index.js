import { Router } from "express";
import indexRouter from "./index.route.js";
import apiRouter from "./api.route.js";


const rotas = Router();

rotas.use("/", indexRouter);
rotas.use("/api", apiRouter);

export default rotas