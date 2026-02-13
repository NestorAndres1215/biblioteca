const MENSAJES = require('../util/mensajes');
const usuarioService = require('../services/usuarioService');

module.exports.listarTodos = async (req, res) => {
    try {
        const usuarios = await usuarioService.listarTodos();
        res.render('usuarios', { usuarios });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.USUARIO.LISTAR_ERROR });
    }
};

module.exports.listarPorId = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ message: MENSAJES.USUARIO.VALIDACION });

        const usuario = await usuarioService.listarPorId(id);
        if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" });

        res.render('usuarios', { usuarios: [usuario] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.USUARIO.LISTAR_ERROR });
    }
};

module.exports.listarPorNombre = async (req, res) => {
    try {
        const { nombre } = req.params;
        const usuarios = await usuarioService.listarPorNombre(nombre);
        res.render('usuarios', { usuarios });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.USUARIO.LISTAR_ERROR });
    }
};

module.exports.listarPorEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const usuarios = await usuarioService.listarPorEmail(email);
        res.render('usuarios', { usuarios });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.USUARIO.LISTAR_ERROR });
    }
};

module.exports.insertar = async (req, res) => {
    try {
        const { nom: nombre, email, pass: password } = req.body;
        if (!nombre || !email || !password) {
            return res.status(400).json({ message: MENSAJES.USUARIO.VALIDACION });
        }

        await usuarioService.insertar({ nombre, email, password });
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.USUARIO.INSERTAR_ERROR });
    }
};

module.exports.actualizar = async (req, res) => {
    try {
        const { id, nom: nombre, email, pass: password } = req.body;
        if (!id || !nombre || !email || !password) {
            return res.status(400).json({ message: MENSAJES.USUARIO.VALIDACION });
        }

        await usuarioService.actualizar(id, { nombre, email, password });
        res.redirect('/usuarios');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.USUARIO.ACTUALIZAR_ERROR });
    }
};

module.exports.eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ message: MENSAJES.USUARIO.VALIDACION });

        await usuarioService.eliminar(id);
        res.redirect('/usuarios');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.USUARIO.ELIMINAR_ERROR });
    }
};
