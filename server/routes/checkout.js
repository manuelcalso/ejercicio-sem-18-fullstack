import chekoutController from "../controlers/chekoutController.js";
import express from "express";

const router = express.Router();

router.get("/create-checkout-session", chekoutController.createCheckoutSession);

export default router;
