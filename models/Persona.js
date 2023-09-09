const connection = require("../knexfile")['development'];

const database = require('knex')(connection);


 const createPersona = (persona) => {
    return database('persona')
    .insert(persona);
 };

 const getPersona = (persona) => {
   console.log('persona',persona)
   return database('producto')
   .where({idPersona:persona});
};
const getAllPersonas = (persona) => {
   return database.select('*').from('persona');
};


 module.exports = {
    createPersona,
    getPersona,
    getAllPersonas
 };