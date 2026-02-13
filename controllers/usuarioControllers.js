const Usuario = require('../models/Usuario');
const MENSAJES = require('../util/mensajes');

// Listar todos los usuarios
module.exports.listarTodos = async (req, res) => {
  try {
    const usuarios = await Usuario.find({});
    res.render('usuarios', { usuarios });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: MENSAJES.USUARIO.LISTAR_ERROR });
  }
};

// Listar usuario por ID
module.exports.listarPorId = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ message: MENSAJES.USUARIO.VALIDACION });

    const usuario = await Usuario.findById(id);
    if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" });

    res.render('usuarios', { usuarios: [usuario] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: MENSAJES.USUARIO.LISTAR_ERROR });
  }
};

// Listar usuario por nombre
module.exports.listarPorNombre = async (req, res) => {
  try {
    const { nombre } = req.params;
    const usuarios = await Usuario.find({ nombre: new RegExp(nombre, 'i') });
    res.render('usuarios', { usuarios });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: MENSAJES.USUARIO.LISTAR_ERROR });
  }
};

// Listar usuario por email
module.exports.listarPorEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const usuarios = await Usuario.find({ email: new RegExp(email, 'i') });
    res.render('usuarios', { usuarios });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: MENSAJES.USUARIO.LISTAR_ERROR });
  }
};

// Insertar nuevo usuario
module.exports.insertar = async (req, res) => {
  try {
    const { nom: nombre, email, pass: password } = req.body;

    if (!nombre || !email || !password) {
      return res.status(400).json({ message: MENSAJES.USUARIO.VALIDACION });
    }

    const usuario = new Usuario({ nombre, email, password });
    await usuario.save();
    console.log('Usuario registrado:', usuario);
    res.redirect('/login');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: MENSAJES.USUARIO.INSERTAR_ERROR });
  }
};

// Actualizar usuario
module.exports.actualizar = async (req, res) => {
  try {
    const { id, nom: nombre, email, pass: password } = req.body;

    if (!id || !nombre || !email || !password) {
      return res.status(400).json({ message: MENSAJES.USUARIO.VALIDACION });
    }

    await Usuario.findByIdAndUpdate(id, { nombre, email, password });
    res.redirect('/usuarios');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: MENSAJES.USUARIO.ACTUALIZAR_ERROR });
  }
};
