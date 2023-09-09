const PersonaModel = require('../models/Persona.js');

const createPersona = (req, res) => {
    PersonaModel.createPersona(req.body)
    .then((respuesta) => {
        return res.status(201).send({ message: respuesta })
    })
    .catch((error) => {
        return res.status(500).send({ message:"Hubo un error en la creación de la persona, "+error })
    });
};
const getPersona = (req, res) => {
    PersonaModel.getPersona(req.params.id)
    .then((respuesta) => {
        return res.status(201).send({ message: respuesta })
    })
    .catch((error) => {
        return res.status(500).send({ message:"Ocurrio un error, "+error })
    });
};
const getAllPersonas = (req, res) => {
    PersonaModel.getAllPersonas()
    .then((respuesta) => {
        return res.status(201).send({ message: respuesta })
    })
    .catch((error) => {
        return res.status(500).send({ message:"Ocurrio un error, "+error })
    });
};
module.exports = {
    createPersona,
    getPersona,
    getAllPersonas
}