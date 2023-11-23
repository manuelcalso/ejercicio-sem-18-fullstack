import chekoutController from "../controlers/chekoutController.js";
import express from "express";
import authorization from "./../middleware/authorization.js";

const router = express.Router();

router.get(
  "/create-checkout-session",
  authorization,
  chekoutController.createCheckoutSession
);
router.post(
  "/create-order",
  express.raw({ type: "application/json" }),
  chekoutController.createOrder
);
router.put("/edit-cart", authorization, chekoutController.editCart);

export default router;
