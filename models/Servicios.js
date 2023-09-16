const connection = require("../knexfile")['development'];

const database = require('knex')(connection);

 const createServicios = (Servicios) => {
    return database('servicios')
    .insert(Servicios);
 };
 const getServicios = (Servicios) => {
   let Serviciosid = Servicios;
   // console.log('Servicios',Servicios)
   return database('servicios')
   .where({id_servicio:Serviciosid})
   // .then((respuesta) => {
   //    return respuesta.message[Servicios];
   // });
};
/*Or const getOneClient = (id) => {
   return database.select('*').from('cliente').where('dni',id);
} */
const getAllServicios = () => {
   return database.select('*').from('servicios');
};


 module.exports = {
    createServicios,
    getServicios,
    getAllServicios
 };