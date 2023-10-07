//importaciones
//librerias
import express from "express";
import usersController from "./../controlers/usersController.js";
//archivos

//base de datos(opcional)

//inicializadores
const router = express.Router();

//controladores
router.get("/", usersController.readAll);
///exportacion
export default router;
