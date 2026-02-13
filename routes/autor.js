const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

const autorController = require('../controllers/autorControllers');

router.get('/autor', autorController.listarTodos);

router.get('/autor/nombre/:nombre', autorController.listarPorNombre);

router.get('/autor/apellido/:apellido', autorController.listarPorApellido);

router.get('/autor/pais/:pais', autorController.listarPorPais);

router.post('/insertarautor', autorController.insertar);

router.post('/editarautor', autorController.editar);

router.get('/eliminarautor/:id', autorController.eliminar);

module.exports = router;
