const readAll = (req, res) => {
  return res.json({
    msg: "pizzas leidas con exito",
    data: "",
  });
};

export default { readAll };
