const connection = require("../knexfile")['development'];

const database = require('knex')(connection);

 const createServicios = (Servicios) => {
    return database('Servicios')
    .insert(Servicios);
 };
 const getServicios = (Servicios) => {
   let Serviciosid = Servicios;
   // console.log('Servicios',Servicios)
   return database('Servicios')
   .where({id:Serviciosid})
   // .then((respuesta) => {
   //    return respuesta.message[Servicios];
   // });
};
/*Or const getOneClient = (id) => {
   return database.select('*').from('cliente').where('dni',id);
} */
const getAllServicios = (Servicios) => {
   return database.select('*').from('Servicios');
};


 module.exports = {
    createServicios,
    getServicios,
    getAllServicios
 };