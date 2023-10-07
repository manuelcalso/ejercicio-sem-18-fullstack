let data = [
  {
    id: 1,
    name: "juan",
    details: "zona jardin",
  },
];

const readAll = (req, res) => {
  res.json({
    msg: "reservacion con éxito",
    data: data,
  });
};

export default {
  readAll,
};
