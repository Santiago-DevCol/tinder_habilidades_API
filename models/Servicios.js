const connection = require("../knexfile")['development'];

const database = require('knex')(connection);

 const createServicios = (Servicios) => {
    return database('servicios')
    .insert(Servicios);
 };
 const getServicios = (Servicios) => {
   let Serviciosid = Servicios;
   return database('servicios')
   .where({id_servicio:Serviciosid})
};

const getAllServicios = () => {
   return database.select('*').from('servicios');
};


 module.exports = {
    createServicios,
    getServicios,
    getAllServicios
 };