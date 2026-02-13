const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioControllers');


router.get('/login', (req, res) => res.render('login'));
router.get('/registro', (req, res) => res.render('registro'));
router.get('/usuarios', usuarioController.listarTodos);


router.get('/usuarios/id/:id', usuarioController.listarPorId);
router.get('/usuarios/nombre/:nombre', usuarioController.listarPorNombre);
router.get('/usuarios/email/:email', usuarioController.listarPorEmail);


router.post('/insertarregistro', usuarioController.insertar);


router.post('/actualizarusuario', usuarioController.actualizar);

module.exports = router;
