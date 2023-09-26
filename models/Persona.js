const connection = require("../knexfile")["development"];
const bcrypt = require("bcrypt");

const database = require("knex")(connection);

const createPersona = async (persona) => {
  try {
    let hashPw = persona.password;

    persona.password = await encryptPassword(hashPw);
    //console.log(persona);

    return database("personas").insert(persona);
  } catch (error) {
    console.log(`parece que hay un error: ${error}`);
  }
};

const getPersona = (persona) => {
  let personaid = atob(persona);
  //console.log('persona',personaid)
  return database("personas").where({ id_persona: personaid });
};
const getAllPersonas = () => {
  return database.select("*").from("personas");
};

async function encryptPassword(pw) {
  const rounds = 10;
  try {
    const hashPassword = await bcrypt.hash(pw, rounds);
    //console.log(hashPassword)
    return hashPassword;
  } catch (error) {
    console.log(`parece que hay un error: ${error}`);
  }
}

const BuscarUsuario = (usuario) => {
  try {
    let user = usuario;
    return database("personas").where({ email: user, status: "activo" });
  } catch (error) {
    console.log(`parece que hay un error: ${error}`);
  }
};

const validarPassword = async (queryUser, QueryDB) => {
  try {
    const match = await bcrypt.compare(queryUser, QueryDB);
    return match;
  } catch (error) {
    console.error("Error al verificar la contraseña:", error);
    return false;
  }
};
const updatePersonaInfo = async (id, data) => {
  try {
    const {
      nombre_persona,
      apellido_persona,
      email,
      locacion,
      precio_servicio,
      perfil,
    } = data;
    const id_persona = id;
    const personatUpdate = await database("personas")
      .where({ id_persona: id_persona })
      .update({
        nombre_persona: nombre_persona,
        apellido_persona: apellido_persona,
        email: email,
        locacion: locacion,
        precio_servicio: precio_servicio,
        perfil: perfil,
      });
    return data;
  } catch {
   
    console.error(" no se actualizaron los datos efectivamente");
    return "no se actualizaron los datos efectivamente";
  }
};
/**La función updatePassword se encarga de actualizar la contraseña del usuario usando su id y la contraseña antigua.
 * Si la contraseña vieja es igual a la contraseña almacenada entonces se actualiza a una nueva contraseña
 */
const updatePassword = async (id, data) => {
  try {
    const { old_password, password } = data;
    const id_persona = id;
    const mensaje = "";
    const personatUpdate = await database("personas")
      //falta poner un condicional que compruebe que el where sea verdadero, dependiendo el resultado se envia un mensaje u otro
      //if(condicion == True){mensaje = "se ha actualizado la contraseña efectivamente"};
      //else {mensaje ="La contraseña ingresada es incorrecta, porfavor intentelo de nuevo"};
      .where({ id_persona: id_persona, password: old_password })
      .update({
        password: password,
      });
    return data;
  } catch {
  
    console.error("No se realizo la actualización de la contraseña");
    return "No se realizo la actualización de la contraseña";
  }
};

module.exports = {
  createPersona,
  getPersona,
  getAllPersonas,
  BuscarUsuario,
  validarPassword,
  updatePersonaInfo,
  updatePassword,
};
