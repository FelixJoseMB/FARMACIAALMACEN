const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');
const { verifyToken } = require('../middlewares/auth');


router.post('/', verifyToken, async (req, res) => {
  try {

    req.body.creadoPor = req.userId; 
    const producto = new Producto(req.body);
    await producto.save();
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el producto' });
  }
});


router.get('/', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});


router.delete('/:id', verifyToken, async (req, res) => {
  try {
    if (req.userRol !== 'admin') {
      return res.status(403).json({ error: 'Solo administradores pueden eliminar' });
    }
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar' });
  }
});

module.exports = router;