const connection = require("../knexfile")['development'];

const database = require('knex')(connection);


const createHabilidadPersona = (habil) => {
   return database('habilidad_personas')
   .insert(habil).returning('id_persona_habilidad');
};

const getHabilidadPersonas = (habil) => {
   // let habilidadPersonaid = atob(habil);
   ///console.log('habilidades',habilidadPersonaid)
   return database.select ('personas.id_persona','personas.nombre_persona','habilidades.id_habilidad','habilidades.descripción')
   .from ('habilidad_personas')
   .join ('personas', function (){
      this  .on ('personas.id_persona', '=', 'habilidad_personas.fk_persona_id')
   })
   .join ('habilidades', function(){this .on ('habilidades.id_habilidad' ,'=' ,'habilidad_personas.fk_habilidad_id')
})


   .where('id_persona_habilidad',habil)
};

const getAllHabilidadesPersonas = () => {
   return database.select('*').from('habilidad_personas');
};
module.exports = {
    createHabilidadPersona,
    getHabilidadPersonas,
    getAllHabilidadesPersonas
};