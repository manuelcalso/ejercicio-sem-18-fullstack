//imports de librerias
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//importaciones de archivos
import userRoutes from "../server/routes/users.js";

//base de datos

//inicializadores
const app = express();
app.use(cors());
app.use(express.json());

//rutas
app.use("/api/v1", userRoutes);

//levantar del servidor
app.listen(3005, () => {
  console.log("servidor encendido");
});
