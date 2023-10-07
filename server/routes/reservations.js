import express from "express";

import reservationsController from "./../controlers/reservationsController.js";

const router = express.Router();

router.get("/", reservationsController.readAll);

export default router;
