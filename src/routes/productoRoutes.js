const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

// CRUD básico
router.post('/', async (req, res) => {
  const producto = new Producto(req.body);
  await producto.save();
  res.status(201).send(producto);
});

router.get('/', async (req, res) => {
  const productos = await Producto.find();
  res.send(productos);
});

module.exports = router;