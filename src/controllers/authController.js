const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const usuario = await Usuario.findOne({ email });
  if (!usuario) return res.status(401).json({ error: 'Credenciales inválidas' });
  
  const token = jwt.sign(
    { id: usuario._id, rol: usuario.rol },
    process.env.JWT_SECRET || 'secret_key',
    { expiresIn: '1h' }
  );
  res.json({ token });
};