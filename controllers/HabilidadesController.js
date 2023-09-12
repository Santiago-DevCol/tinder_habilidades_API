const HabilidadModel = require('../models/Habilidades.js');

const createHabilidad = (req, res) => {
    HabilidadModel.createHabilidad(req.body)
    .then((respuesta) => {
        return res.status(201).send({ message: respuesta });
    })
    .catch((error) => {
        return res.status(500).send({ message:"Algún error en la creación de la habilidad, "+error });
    });
};
const getHabilidad = (req, res) => {
    HabilidadModel.getHabilidad(req.params.id)
    .then((respuesta) => {
        return res.status(201).send({ message: respuesta })
    })
    .catch((error) => {
        return res.status(500).send({ message:"Ocurrio un error,  "+error })
    });
};
const getAllHabilidades = (req, res) => {
    HabilidadModel.getAllHabilidades()
    .then((respuesta) => {
        return res.status(201).send({ message: respuesta })
    })
    .catch((error) => {
        return res.status(500).send({ message:"Ocurrio un error , "+error })
    });
};
module.exports = {
    createHabilidad,
    getHabilidad,
    getAllHabilidades
}