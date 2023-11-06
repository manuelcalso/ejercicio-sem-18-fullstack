//cart.js
///listado personalizado del usuario y los productos que va a comprar

import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  products: [
    {
      quantity: {
        type: Number,
        required: true,
      },
      priceID: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      size: {
        type: String,
        required: true,
      },
      priceDescription: {
        type: String,
      },
      price: {
        type: Number,
        required: true,
      },
      img: {
        type: String,
      },
      slug: {
        type: String,
      },
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
