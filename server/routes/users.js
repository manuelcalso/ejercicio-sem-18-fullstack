//importaciones
//librerias
import express from "express";
import usersController from "./../controlers/usersController.js";
import jwt from "jsonwebtoken";
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

//leer usuarios
router.get("/", usersController.readAll);
//crear usuario
router.post("/create", usersController.create);

//autenticar usuario
router.post("/login", usersController.login);
//autorizacion de usuario
// E. AUTORIZACIÓN DE USUARIO
// INTEGRACIÓN DE MIDDLEWARES
router.get(
  "/verifytoken",
  async (req, res, next) => {
    // DESENCRIPTACIÓN DE DATOS
    const token = req.header("x-auth-token");
    console.log("token", token);

    if (!token) {
      return res.status(401).json({
        msg: "No hay token o es inválido. Vete lejos.",
      });
    }

    try {
      console.log("token", token);
      console.log("secret", process.env.JWT_SECRET);
      // TOKEN DESENCRIPTADO
      const openToken = await jwt.verify(token, process.env.JWT_SECRET);
      console.log("openToken", openToken);

      // PASARLO EN EL REQ.USER (req.body extensión)
      req.user = openToken.user;

      next();
    } catch (error) {
      console.log("error", error);
      res.status(500).json({
        msg: "Hubo un error en servidor o token",
      });
    }
  },
  usersController.verifyToken
);

///exportacion
export default router;
