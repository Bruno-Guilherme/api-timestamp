import express from "express";
import "dotenv/config"
import cors from "cors";
import rotas from "./src/routes/index.js";



const app = express();

app.use(cors());
app.use(express.json())
app.use(rotas);



export default app;