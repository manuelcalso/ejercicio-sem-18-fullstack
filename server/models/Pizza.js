//importacion
import mongoose from "mongoose";

//schema
const pizzaSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

//modelo
const Pizza = mongoose.model("Pizza", pizzaSchema);

//exportacion
export default Pizza;
