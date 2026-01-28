require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('./db'); // Conexión a MongoDB
const MENSAJES = {
  SERVIDOR_CORRIENDO: '🚀 Servidor corriendo en',
  ERROR_SERVIDOR: '❌ Error interno del servidor'
};

const app = express();

// Configuración EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use(require('./routes/libro'));
app.use(require('./routes/editorial'));
app.use(require('./routes/autor'));
app.use(require('./routes/usuario'));

// Middleware 404
app.use((req, res) => {
  res.status(404).render('404', { mensaje: '⚠ Página no encontrada' });
});

// Middleware errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500', { mensaje: MENSAJES.ERROR_SERVIDOR });
});

// Iniciar servidor
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`${MENSAJES.SERVIDOR_CORRIENDO} → http://localhost:${PORT}`);
});

module.exports = app;
