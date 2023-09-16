const ServiciosModel = require('../models/Servicios.js');

const createServicios = (req, res) => {
    ServiciosModel.createServicios(req.body)
    .then((respuesta) => {
        return res.status(201).send({ message: respuesta });
    })
    .catch((error) => {
        return res.status(500).send({ message:"Algún error en la creación de la Servicios, "+error });
    });
};
const getServicios = (req, res) => {
    ServiciosModel.getServicios(req.params.id)
    .then((respuesta) => {
        return res.status(200).send({ message: respuesta })
    })
    .catch((error) => {
        return res.status(500).send({ message:"Ocurrio un error,  "+error })
    });
};
const getAllServicios = (req, res) => {
    ServiciosModel.getAllServicios()
    .then((respuesta) => {
        return res.status(200).send({ message: respuesta })
    })
    .catch((error) => {
        return res.status(500).send({ message:"Ocurrio un error , "+error })
    });
};
module.exports = {
    createServicios,
    getServicios,
    getAllServicios
}