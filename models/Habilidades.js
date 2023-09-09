const connection = require("../knexfile")['development'];

const database = require('knex')(connection);


 const createHabilidad = (habil) => {
    return database('habilidades')
    .insert(habil).returning('id');
 };

 const getHabilidad = (habil) => {
    console.log('habilidades',habil)
    return database('habilidades')
    .where({idHabilidad:habil})
    .then((respuesta) => {
       return respuesta.message[0];
    });
 };

 const getAllHabilidades = (habil) => {
    return database.select('*').from('habilidades');
 };
module.exports = {
    createHabilidad,
    getHabilidad,
    getAllHabilidades
};