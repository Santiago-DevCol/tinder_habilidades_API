const HabilidadPersonaModel = require('../models/HabilidadesPersonas');

const createHabilidadPersona = (req, res) => {
    HabilidadPersonaModel.createHabilidadPersona(req.body)
    .then((respuesta) => {
        return res.status(201).send({ message: respuesta });
    })
    .catch((error) => {
        return res.status(500).send({ message:"Algún error en la creación de la habilidad, "+error });
    });
};
const getHabilidadPersonas = (req, res) => {
    let habilidad = btoa(req.params.id);
    HabilidadPersonaModel.getHabilidadPersonas(habilidad)
    .then((respuesta) => {
        return res.status(201).send({ message: respuesta })
    })
    .catch((error) => {
        return res.status(500).send({ message:"Ocurrio un error,  "+error })
    });
};
const getAllHabilidadesPersonas = (req, res) => {
    HabilidadPersonaModel.getAllHabilidadesPersonas()
    .then((respuesta) => {
        return res.status(201).send({ message: respuesta })
    })
    .catch((error) => {
        return res.status(500).send({ message:"Ocurrio un error , "+error })
    });
};
module.exports = {
    createHabilidadPersona,
    getHabilidadPersonas,
    getAllHabilidadesPersonas
}