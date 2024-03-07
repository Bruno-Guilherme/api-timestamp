import express from "express";
import "dotenv/config"
import cors from "cors";
import apiRouter from "./src/routes/api.route.js";

const app = express();

app.use(cors());
app.use(express.json())
app.use(apiRouter);

export default app;