const { render } = require('ejs');
const express = require('express');
const router = express.Router();

router.get('/login', (req, res) =>
{
    res.render('login');
})
router.get('/registro', (req, res) =>
{
    res.render('registro');
})
const usuarioController = require('../controllers/usuarioControllers');
//registrar
router.post('/insertarregistro',usuarioController.insertar);
//inicio sesion
 


module.exports = router;