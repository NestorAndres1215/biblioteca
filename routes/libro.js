const express = require('express');
const router = express.Router();

// ruta para el index

router.get('/', (req, res) =>
{
    res.render('index');
})

const libroController = require('../controllers/libroControllers');


router.get('/libro', libroController.listar);

router.get('/libro/id/:id', libroController.listarPorId);

router.get('/libro/titulo/:titulo', libroController.listarPorTitulo);

router.post('/insertarlibro',libroController.insertar);

router.post('/editar',libroController.editar);

router.get('/eliminar/:id', libroController.eliminar);
module.exports = router;