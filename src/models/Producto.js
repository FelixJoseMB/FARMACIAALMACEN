const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  stock: { type: Number, default: 0 },
  fechaVencimiento: { type: Date }
});

module.exports = mongoose.model('Producto', ProductoSchema);

ProductoSchema.methods.actualizarStock = async function(cantidad) {
  this.stock += cantidad;
  await this.save();
  return this;
};