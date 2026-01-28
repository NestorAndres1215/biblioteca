const express = require('express');
const router = express.Router();

// ruta para el index

router.get('/', (req, res) =>
{
    res.render('index');
})

const editorialController = require('../controllers/editorialControllers');
//listar
router.get('/editorial', editorialController.listar);

//registrar
router.post('/insertareditorial',editorialController.insertar);
//editar
router.post('/editareditorial',editorialController.editar);
//eliminar 
router.get('/eliminareditorial/:id', editorialController.eliminar);
module.exports = router;