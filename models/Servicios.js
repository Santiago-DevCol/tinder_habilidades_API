const connection = require("../knexfile")['development'];

const database = require('knex')(connection);

const createServicios = (Servicios) => {
   return database('servicios')
      .insert(Servicios);
};
const getServicios = (Servicios) => {
   // let Serviciosid = Servicios;
   // console.log('Servicios',Servicios)

   return database.select('servicios.id_servicio','personas.id_persona', 'personas.nombre_persona', 'personas.precio_servicio', 'servicios.descripción',
      'empresa.nombre_empresa', 'servicios.status')
      .from('personas')
      .join('servicios', function () {
         this
            .on('servicios.fk_persona_id', '=', 'personas.id_persona')
      })
      .join('empresa', function () {
         this
            .on('empresa.id', '=', 'servicios.fk_empresa_id')
      })
      .where({ id_servicio: Servicios});
   // .then((respuesta) => {
   //    return respuesta.message[Servicios];,
   // });
};
/*Or const getOneClient = (id) => {
   return database.select('*').from('cliente').where('dni',id);
} */
const getAllServicios = () => {
   return database.select('servicios.id_servicio','personas.id_persona', 'personas.nombre_persona', 'personas.precio_servicio', 'servicios.descripción',
      'empresa.nombre_empresa', 'servicios.status')
      .from('personas')
      .join('servicios', function () {
         this
            .on('servicios.fk_persona_id', '=', 'personas.id_persona')
      })
      .join('empresa', function () {
         this
            .on('empresa.id', '=', 'servicios.fk_empresa_id')
      });
};
/** Validar empresa y cliente status, luego el valor obtenido actualizarlo en el valor status de servicio*/
const validateServicio = () => {
   
};

module.exports = {
   createServicios,
   getServicios,
   getAllServicios
};