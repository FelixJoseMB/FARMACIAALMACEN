const Producto = require('../models/Producto');

exports.actualizarStock = async (req, res) => {
  const { productoId, cantidad } = req.body;
  const producto = await Producto.findById(productoId);
  if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
  
  producto.stock += cantidad;
  await producto.save();
  res.json(producto);
};