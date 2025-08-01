const Producto = require('../models/Producto');

exports.productosProximosAVencer = async (req, res) => {
  const hoy = new Date();
  const limite = new Date();
  limite.setMonth(hoy.getMonth() + 1);

  const productos = await Producto.find({
    fechaVencimiento: { $gte: hoy, $lte: limite }
  });
  res.json(productos);
};