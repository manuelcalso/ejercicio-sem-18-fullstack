import express from "express";

import carsController from "./../controlers/carsController.js";

const router = express.Router();

router.get("/", carsController.readAll);

export default router;
