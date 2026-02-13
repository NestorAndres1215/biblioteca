
const Autor = require('../models/Autor');

const listar = async () => {
    return await Autor.find({});
};

const listarPorId = async (id) => {
    return await Autor.findById(id);
};

const listarPorNombre = async (nombre) => {
    return await Autor.find({ nombre: new RegExp(nombre, 'i') });
};

const listarPorApellido = async (apellido) => {
    return await Autor.find({ apellido: new RegExp(apellido, 'i') });
};

const listarPorPais = async (pais) => {
    return await Autor.find({ pais: new RegExp(pais, 'i') });
};

const insertar = async ({ idAutor, nombre, apellido, pais }) => {
    const autor = new Autor({ idAutor, nombre, apellido, pais });
    return await autor.save();
};

const editar = async (id, { idAutor, nombre, apellido, pais }) => {
    return await Autor.findByIdAndUpdate(id, { idAutor, nombre, apellido, pais });
};

const eliminar = async (id) => {
    return await Autor.findByIdAndRemove(id);
};

module.exports = {
    listar,
    listarPorId,
    listarPorNombre,
    listarPorApellido,
    listarPorPais,
    insertar,
    editar,
    eliminar,
};
