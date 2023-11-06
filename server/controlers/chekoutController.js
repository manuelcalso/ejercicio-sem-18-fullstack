//import Cart from "../models/Cart";
import stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
///importar y configurar clave de stripe
const stripeKey = stripe(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (req, res) => {
  //obtener usuario y id con su correo
  console.log("accediste...");

  const user = {
    id: 123,
    email: "juan@hola.com",
  };

  //creacion de carrito de compras u obtncion del usuario

  //creacion de checkout en stripe
  const line_items = [
    {
      price: "price_1O9ZRWAtIcHbNlyg0U91jVWI",
      quantity: 1,
    },
  ];

  try {
    const session = await stripeKey.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: "https://google.com",
      cancel_url: "https://yahoo.com.mx",
      customer_email: user.email,
    });

    res.status(200).json({
      msg: "accede a este link para la sesion de pago",
      session_url: session.url,
      session,
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({
      msg: "Hubo un problema",
      error,
    });
  }
};

export default { createCheckoutSession };
