// inicando coneccion con bd knex
const connection = require("../knexfile")["development"];

const database = require("knex")(connection);

const createHabilidadPersona = (habil) => {
  return database("habilidad_personas")
    .insert(habil)
    .returning("id_persona_habilidad");
};

const getHabilidadPersonas = (id_persona) => {
  let idPersona = atob(id_persona);
  return database
    .select(
      "personas.id_persona",
      "personas.nombre_persona",
      "habilidades.id_habilidad",
      "habilidades.descripción"
    )
    .from("habilidad_personas")
    .innerJoin(
      "personas",
      "habilidad_personas.fk_persona_id",
      "=",
      "personas.id_persona"
    )
    .innerJoin(
      "habilidades",
      "habilidad_personas.fk_habilidad_id",
      "=",
      "habilidades.id_habilidad"
    )
    .where("personas.id_persona", idPersona);
};

const getAllHabilidadesPersonas = () => {
  return database.select("*").from("habilidad_personas");
};

const deleteHabilidadPersona = async (idPersona,habilidad) => {
  try {
    const habilidadSeleccionada = await database("habilidad_personas")
      .where({ fk_persona_id: idPersona, fk_habilidad_id:habilidad })
      .del();
      
  } catch (error) {
    throw new Error(`Error al eliminar la habilidad: ${error.message}`);
  }
};

module.exports = {
  createHabilidadPersona,
  getHabilidadPersonas,
  getAllHabilidadesPersonas,
  deleteHabilidadPersona,
};
