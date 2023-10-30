import express from "express";
import toppingsController from "./../controlers/toppingsController.js";
const router = express.Router();

///obtener toppings
router.get("/", toppingsController.readAll);
//crear toppings
router.post("/create", toppingsController.create);

export default router;
