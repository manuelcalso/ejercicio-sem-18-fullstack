import express from "express";
import pizzasController from "./../controlers/pizzasController.js";

const router = express.Router();

//obtener las pizzas
router.get("/", pizzasController.readAll);
//crear una pizza
router.post("/create", pizzasController.create);
//obtener una pizza
router.get("/readone/:id", pizzasController.readOne);
//actualizar una pizza
router.put("/updateone/:id", pizzasController.edit);
// borrar una pizza
router.delete("/deleteone/:id", pizzasController.deleteOne);

export default router;
