const validarFecha = require('../middlewares/validarFecha');

router.post('/', validarFecha, async (req, res) => {
  const producto = new Producto(req.body);
  await producto.save();
  res.status(201).send(producto);
});