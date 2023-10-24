import express from "express";
import pizzasController from "./../controlers/pizzasController.js";

const router = express.Router();

router.get("/", pizzasController.readAll);

export default router;
