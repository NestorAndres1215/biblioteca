const express = require('express');
const router = express.Router();

// ruta para el index

router.get('/', (req, res) =>
{
    res.render('index');
})

const autorController = require('../controllers/autorControllers');
//listar
router.get('/autor', autorController.listar);
//registrar
router.post('/insertarautor',autorController.insertar);
//editar
router.post('/editarautor',autorController.editar);
//eliminar 
router.get('/eliminarautor/:id', autorController.eliminar);
module.exports = router;