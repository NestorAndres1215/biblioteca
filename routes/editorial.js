const express = require('express');
const router = express.Router();

// ruta para el index

router.get('/', (req, res) =>
{
    res.render('index');
})

const editorialController = require('../controllers/editorialControllers');

router.get('/editorial', editorialController.listar);

router.get('/editorial/id/:id', editorialController.listarPorId);

router.get('/editorial/nombre/:nombre', editorialController.listarPorNombre);

router.post('/insertareditorial',editorialController.insertar);

router.post('/editareditorial',editorialController.editar);

router.get('/eliminareditorial/:id', editorialController.eliminar);
module.exports = router;