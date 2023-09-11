const connection = require("../knexfile")['development'];

const database = require('knex')(connection);


 const createPersona = (persona) => {
    return database('personas')
    .insert(persona);
 };

 const getPersona = (persona) => {
   let personaid= atob(persona);
   //console.log('persona',personaid)
   return database('personas')
   .where({id_persona:personaid});
};
const getAllPersonas = () => {
   return database.select('*').from('personas');
};


 module.exports = {
    createPersona,
    getPersona,
    getAllPersonas
 };