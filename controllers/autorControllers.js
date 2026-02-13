
const MENSAJES = require('../util/mensajes');
const autorService = require('../service/autorService');

module.exports.listar = async (req, res) => {
    try {
        const autores = await autorService.listar();
        res.render('autor', { autores });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.AUTOR.LISTAR_ERROR });
    }
};

module.exports.listarPorId = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ message: MENSAJES.AUTOR.VALIDACION });

        const autor = await autorService.listarPorId(id);
        if (!autor) return res.status(404).json({ message: "Autor no encontrado" });

        res.render('autor', { autores: [autor] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.AUTOR.LISTAR_ERROR });
    }
};

module.exports.listarPorNombre = async (req, res) => {
    try {
        const { nombre } = req.params;
        const autores = await autorService.listarPorNombre(nombre);
        res.render('autor', { autores });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.AUTOR.LISTAR_ERROR });
    }
};

module.exports.listarPorApellido = async (req, res) => {
    try {
        const { apellido } = req.params;
        const autores = await autorService.listarPorApellido(apellido);
        res.render('autor', { autores });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.AUTOR.LISTAR_ERROR });
    }
};

module.exports.listarPorPais = async (req, res) => {
    try {
        const { pais } = req.params;
        const autores = await autorService.listarPorPais(pais);
        res.render('autor', { autores });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.AUTOR.LISTAR_ERROR });
    }
};

module.exports.insertar = async (req, res) => {
    try {
        const { aut: idAutor, nom: nombre, ape: apellido, pa: pais } = req.body;
        if (!idAutor || !nombre || !apellido || !pais) {
            return res.status(400).json({ message: MENSAJES.AUTOR.VALIDACION });
        }

        await autorService.insertar({ idAutor, nombre, apellido, pais });
        res.redirect('/autor');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.AUTOR.INSERTAR_ERROR });
    }
};

module.exports.editar = async (req, res) => {
    try {
        const { e_id: id, e_aut: idAutor, e_nom: nombre, e_ape: apellido, e_pa: pais } = req.body;
        if (!id) return res.status(400).json({ message: MENSAJES.AUTOR.VALIDACION });

        await autorService.editar(id, { idAutor, nombre, apellido, pais });
        res.redirect('/autor');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.AUTOR.ACTUALIZAR_ERROR });
    }
};

module.exports.eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ message: MENSAJES.AUTOR.VALIDACION });

        await autorService.eliminar(id);
        res.redirect('/autor');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.AUTOR.ELIMINAR_ERROR });
    }
};
