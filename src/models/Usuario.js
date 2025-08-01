<<<<<<< Updated upstream
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
=======
const Usuario = require('../models/Usuario');
>>>>>>> Stashed changes

exports.crearUsuario = async (req, res) => {
  const { email, password, rol } = req.body;
  const usuario = new Usuario({ email, password, rol });
  await usuario.save();
  res.status(201).json(usuario);
};

<<<<<<< Updated upstream

UsuarioSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
=======
exports.listarUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
};
>>>>>>> Stashed changes
