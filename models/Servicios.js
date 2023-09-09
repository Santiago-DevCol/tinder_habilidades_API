const connection = require("../knexfile")['development'];
const database = require('knex')(connection);

const createServicio = (servicio) => {
    return database('servicios').insert(servicio);
}




module.exports = {
    createServicio
}