
const Editorial = require('../models/Editorial');

const listar = async () => {
    return await Editorial.find({});
};

const listarPorId = async (id) => {
    return await Editorial.findById(id);
};

const listarPorNombre = async (nombre) => {
    return await Editorial.find({ nombre: new RegExp(nombre, 'i') });
};

const insertar = async ({ idEditorial, editorial }) => {
    const nuevaEditorial = new Editorial({ idEditorial, editorial });
    return await nuevaEditorial.save();
};

const editar = async (id, { idEditorial, editorial }) => {
    return await Editorial.findByIdAndUpdate(id, { idEditorial, editorial });
};

const eliminar = async (id) => {
    return await Editorial.findByIdAndRemove(id);
};

module.exports = {
    listar,
    listarPorId,
    listarPorNombre,
    insertar,
    editar,
    eliminar,
};
