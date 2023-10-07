//https://ejercicio-sem-18-fullstack.onrender.com/api/v1/cars
//imports de librerias
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//importaciones de archivos
import userRoutes from "../server/routes/users.js";
import carRoute from "./routes/cars.js";
import reservations from "./routes/reservations.js";

//base de datos

//inicializadores
const app = express();
app.use(cors());
app.use(express.json());

//rutas
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/cars", carRoute);
app.use("/api/v1/reservations", reservations);

//levantar del servidor
app.listen(3005, () => {
  console.log("servidor encendido");
});
