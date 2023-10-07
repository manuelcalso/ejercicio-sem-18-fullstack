//importaciones
//librerias
import express from "express";
import usersController from "./../controlers/usersController.js";
//archivos

//base de datos(opcional)

//inicializadores
const router = express.Router();

//controladores
/**

* @swagger

* /api/v1/users:

*  get:

*      summary: Obtener todos los usuarios

*      tags: [Usuarios]

*/

/***
 * @swagger
 * /api/v1/users:
 * get:
 * summary: Obtener todos los usuarios
 * tags: [Usuarios]
 *
 *
 */

router.get("/", usersController.readAll);
///exportacion
export default router;
