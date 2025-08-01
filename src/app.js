const express = require('express');
const app = express();

// Middleware para JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡API de Farmacia funcionando!');
});

// Importar rutas
const productoRoutes = require('./routes/productoRoutes');
app.use('/api/productos', productoRoutes);

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});