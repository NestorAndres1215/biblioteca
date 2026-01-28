const express = require('express');
const router = express.Router();

// ruta para el index

router.get('/', (req, res) =>
{
    res.render('index');
})

const libroController = require('../controllers/libroControllers');
//listar
router.get('/libro', libroController.listar);

//registrar
router.post('/insertarlibro',libroController.insertar);
//editar
router.post('/editar',libroController.editar);
//eliminar 
router.get('/eliminar/:id', libroController.eliminar);
module.exports = router;