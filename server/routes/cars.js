import express from "express";

import carsController from "./../controlers/carsController.js";

const router = express.Router();

/**
 * @swagger
 * 
 * /api/v1/cars:
 * get: 
 * summary: Obtener todos los cars

*      tags: [Cars]
 */

router.get("/", carsController.readAll);

export default router;
