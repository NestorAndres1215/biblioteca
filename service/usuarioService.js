
const Usuario = require('../models/Usuario');

const listarTodos = async () => {
    return await Usuario.find({});
};

const listarPorId = async (id) => {
    return await Usuario.findById(id);
};

const listarPorNombre = async (nombre) => {
    return await Usuario.find({ nombre: new RegExp(nombre, 'i') });
};

const listarPorEmail = async (email) => {
    return await Usuario.find({ email: new RegExp(email, 'i') });
};

const insertar = async ({ nombre, email, password }) => {
    const usuario = new Usuario({ nombre, email, password });
    return await usuario.save();
};

const actualizar = async (id, { nombre, email, password }) => {
    return await Usuario.findByIdAndUpdate(id, { nombre, email, password });
};

const eliminar = async (id) => {
    return await Usuario.findByIdAndRemove(id);
};

module.exports = {
    listarTodos,
    listarPorId,
    listarPorNombre,
    listarPorEmail,
    insertar,
    actualizar,
    eliminar,
};
