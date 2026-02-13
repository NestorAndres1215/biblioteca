// controllers/editorialController.js
const MENSAJES = require('../util/mensajes');
const editorialService = require('../service/editorialService');

module.exports.listar = async (req, res) => {
    try {
        const editoriales = await editorialService.listar();
        res.render('editorial', { editoriales });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.EDITORIAL.LISTAR_ERROR });
    }
};

module.exports.listarPorId = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ message: MENSAJES.EDITORIAL.VALIDACION });

        const editorial = await editorialService.listarPorId(id);
        if (!editorial) return res.status(404).json({ message: "Editorial no encontrada" });

        res.render('editorial', { editoriales: [editorial] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.EDITORIAL.LISTAR_ERROR });
    }
};

module.exports.listarPorNombre = async (req, res) => {
    try {
        const { nombre } = req.params;
        const editoriales = await editorialService.listarPorNombre(nombre);
        res.render('editorial', { editoriales });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.EDITORIAL.LISTAR_ERROR });
    }
};

module.exports.insertar = async (req, res) => {
    try {
        const { codi: idEditorial, edit: editorial } = req.body;
        if (!idEditorial || !editorial) {
            return res.status(400).json({ message: MENSAJES.EDITORIAL.VALIDACION });
        }

        await editorialService.insertar({ idEditorial, editorial });
        res.redirect('/editorial');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.EDITORIAL.INSERTAR_ERROR });
    }
};

module.exports.editar = async (req, res) => {
    try {
        const { e_id: id, e_edi: idEditorial, e_edit: editorial } = req.body;
        if (!id || !idEditorial || !editorial) {
            return res.status(400).json({ message: MENSAJES.EDITORIAL.VALIDACION });
        }

        await editorialService.editar(id, { idEditorial, editorial });
        res.redirect('/editorial');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.EDITORIAL.ACTUALIZAR_ERROR });
    }
};

module.exports.eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ message: MENSAJES.EDITORIAL.VALIDACION });

        await editorialService.eliminar(id);
        res.redirect('/editorial');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.EDITORIAL.ELIMINAR_ERROR });
    }
};
