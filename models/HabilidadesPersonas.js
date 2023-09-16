const connection = require("../knexfile")['development'];

const database = require('knex')(connection);


const createHabilidadPersona = (habil) => {
   return database('habilidad_personas')
   .insert(habil).returning('id_persona_habilidad');
};

const getHabilidadPersonas = (habil) => {
   let habilidadPersonaid = atob(habil);
   ///console.log('habilidades',habilidadPersonaid)
   return database('habilidad_personas')
   .where({id_habilidad:habilidadPersonaid})
};

const getAllHabilidadesPersonas = () => {
   return database.select('*').from('habilidad_personas');
};
module.exports = {
    createHabilidadPersona,
    getHabilidadPersonas,
    getAllHabilidadesPersonas
};