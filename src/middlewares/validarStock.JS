
const validarStock = (req, res, next) => {
  const { stock } = req.body;

  if (stock === undefined) {
    return next();  
  }

  if (isNaN(stock) || stock < 0) {
    return res.status(400).json({ 
      error: 'El stock debe ser un número positivo o cero' 
    });
  }

  next();  
};

module.exports = validarStock;