const PersonaModel = require("../models/Persona.js");

const createPersona = (req, res) => {
  PersonaModel.createPersona(req.body)
    .then((respuesta) => {
      return res.status(201).send({ message: respuesta });
    })
    .catch((error) => {
      return res
        .status(500)
        .send({
          message: "Hubo un error en la creación de la persona, " + error,
        });
    });
};
const updatePersonaInfo = (req, res) => {
  PersonaModel.updatePersonaInfo(req.params.id, req.body)
    .then((respuesta) => {
      return res.status(201).send({ message: respuesta });
    })
    .catch((error) => {
      return res
        .status(500)
        .send({
          message: "Hubo un error en la creación de la persona, " + error,
        });
    });
};
const updatePassword = (req, res) => {
  PersonaModel.updatePassword(req.params.id, req.body)
    .then((respuesta) => {
      return res.status(201).send({ message: respuesta });
    })
    .catch((error) => {
      return res
        .status(500)
        .send({
          message: "Hubo un error en el cambio de contraseña, " + error,
        });
    });
};
const getPersona = (req, res) => {
  let persona = btoa(req.params.id);
  PersonaModel.getPersona(persona)
    .then((respuesta) => {
      return res.status(200).send({ message: respuesta });
    })
    .catch((error) => {
      return res.status(500).send({ message: "Ocurrio un error, " + error });
    });
};
const getAllPersonas = (req, res) => {
  PersonaModel.getAllPersonas()
    .then((respuesta) => {
      return res.status(200).send({ message: respuesta });
    })
    .catch((error) => {
      return res.status(500).send({ message: "Ocurrio un error, " + error });
    });
};
module.exports = {
  createPersona,
  getPersona,
  getAllPersonas,
  updatePersonaInfo,
  updatePassword,
};
