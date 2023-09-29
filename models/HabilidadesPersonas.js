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

const deleteHabilidadPersona = async (idPersona) => {
  try {
    const habilidad = await database("habilidad_personas")
      .where({ fk_persona_id: idPersona })
      .select('fk_habildad_id')
      .first();

    if (habilidad) {
      await database("habilidad_personas")
        .where({ fk_habilidad_id: habilidad.fk_habilidad_id, fk_persona_id: idPersona })
        .del();
      return `Habilidad ${habilidad.fk_habilidad_id} eliminada correctamente para la persona ${idPersona}.`;
    } else {
      return `No se encontró una habilidad asociada a la persona ${idPersona}.`;
    }
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
