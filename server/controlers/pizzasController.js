import Pizza from "../models/Pizza.js";

const readAll = async (req, res) => {
  try {
    const pizzas = await Pizza.find();

    return res.json({
      msg: "pizzas leidas con exito",
      data: pizzas,
    });
  } catch (error) {
    res.status(500).json({
      msg: "hubo un error obteniendo los datos",
    });
  }
};

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const newPizza = await Pizza.create({
      name,
    });

    return res.json({
      msg: "pizza creada",
      data: newPizza,
    });
  } catch (error) {
    res.status(500).json({
      msg: "hubo un error obteniendo los datos",
    });
  }
};

const readOne = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  try {
    const pizza = await Pizza.findOne({
      _id: id,
    });

    if (!pizza) {
      return res.status(400).json({
        msg: "pizza no encontrada",
      });
    } else {
      res.json({
        msg: "Pizza encontrada con exito",
        data: pizza,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "hubo un error obteniendo los datos",
    });
  }
};

const edit = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedPizza = await Pizza.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    return res.json({
      msg: "pizza actualizada con exito",
      data: updatedPizza,
    });
  } catch (error) {
    res.status(500).json({
      msg: "hubo un error obteniendo los datos",
    });
  }
};

export default { readAll, create, readOne, edit };
