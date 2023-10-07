//importaciones
//librerias
import express from "express";
//archivos

//base de datos(opcional)
let data = [
  {
    id: 1,

    nombre: "Mike",
  },

  {
    id: 2,

    nombre: "Ramiro",
  },
];

//inicializadores
const router = express.Router();

//controladores
router.get("/", (req, res) => {
  res.json({
    message: "Datos obtenidos con éxito.",

    data: data,
  });
});
///exportacion
export default router;
