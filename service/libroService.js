
const Libro = require('../models/Libro');

const listar = async () => {
    return await Libro.find({}).populate('idEditorial').populate('idAutor');
};

const listarPorId = async (id) => {
    return await Libro.findById(id).populate('idEditorial').populate('idAutor');
};

const listarPorTitulo = async (titulo) => {
    return await Libro.find({ titulo: new RegExp(titulo, 'i') })
                      .populate('idEditorial')
                      .populate('idAutor');
};

const insertar = async ({ idLibro, titulo, idEditorial, idAutor }) => {
    const libro = new Libro({ idLibro, titulo, idEditorial, idAutor });
    return await libro.save();
};

const editar = async (id, { idLibro, titulo, idEditorial, idAutor }) => {
    return await Libro.findByIdAndUpdate(id, { idLibro, titulo, idEditorial, idAutor });
};

const eliminar = async (id) => {
    return await Libro.findByIdAndRemove(id);
};

module.exports = {
    listar,
    listarPorId,
    listarPorTitulo,
    insertar,
    editar,
    eliminar,
};
