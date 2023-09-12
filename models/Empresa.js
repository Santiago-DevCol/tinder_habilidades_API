const connection = require("../knexfile")['development'];

const database = require('knex')(connection);


 const createEmpresa = (empresa) => {
    return database('empresa')
    .insert(empresa);
 };
 const getEmpresa = (empresa) => {
   let empresaid = empresa;
   // console.log('empresa',empresa)
   return database('empresa')
   .where({id:empresaid})
   // .then((respuesta) => {
   //    return respuesta.message[empresa];
   // });
};
/*Or const getOneClient = (id) => {
   return database.select('*').from('cliente').where('dni',id);
} */
const getAllEmpresas = (empresa) => {
   return database.select('*').from('empresa');
};


 module.exports = {
    createEmpresa,
    getEmpresa,
    getAllEmpresas
 };