const connection = require("../knexfile")["development"];
const bcrypt = require("bcrypt");

const database = require("knex")(connection);

const createEmpresa = async (empresa) => {
  try {
    let hashPw = empresa.password;

    empresa.password = await encryptPassword(hashPw);
    //console.log(empresa);

    return database("empresa").insert(empresa);
  } catch (error) {}
};
const getEmpresa = (empresa) => {
  let empresaid = empresa;
  // console.log('empresa',empresa)
  return database("empresa").where({ id: empresaid });
  // .then((respuesta) => {
  //    return respuesta.message[empresa];
  // });
};
/*Or const getOneClient = (id) => {
   return database.select('*').from('cliente').where('dni',id);
} */
const getAllEmpresas = (empresa) => {
  return database.select("*").from("empresa");
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
    return database("empresa").where({ email: user, estatus: "activo" });
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
/**La función updateEmpresaInfo permite actualizar la información visible de la persona */
const updateEmpresaInfo = async (id, data) => {
  try {
    const { nit, nombre_empresa, direccion, email, telefono_empresa } = data;
    const id_empresa = id;
    const empresaUpdate = await database("empresa")
      .where({ id: id_empresa })
      .update({
        nit: nit,
        nombre_empresa: nombre_empresa,
        email: email,
        direccion: direccion,
        telefono_empresa: telefono_empresa
      });
    const mensaje = "se actualizaron los datos efectivamente";
    console.log(mensaje);
    return mensaje;
  } catch {
    const mensaje = "No se realizo la actualización de los datos";
    console.error(mensaje);
    return mensaje;
  }
};
/**La función updateEmpresaPassword se encarga de actualizar la contraseña de la empresa usando su id y la contraseña antigua.
 * Si la contraseña vieja es igual a la contraseña almacenada entonces se actualiza a una nueva contraseña
 */
const updateEmpresaPassword = async (id, data) => {
  try {
    const { old_password, password } = data;
    const id_empresa = id;
    const mensaje = "";
        //falta poner un condicional que compruebe que el where sea verdadero, dependiendo el resultado se envia un mensaje u otro
      //if(condicion == True){mensaje = "se ha actualizado la contraseña efectivamente"};
      //else {mensaje ="La contraseña ingresada es incorrecta, porfavor intentelo de nuevo"};
    const empresaUpdate = await database("empresa")
      .where({ id: id_empresa, password: old_password })
      .update({
        password: password
      });

    mensaje = "la petición funciono";
    console.log(mensaje);
    return mensaje;
  } catch {
    const mensaje = "No se realizo la actualización de la contraseña";
    console.error(mensaje);
    return mensaje;
  }
};

module.exports = {
  createEmpresa,
  getEmpresa,
  getAllEmpresas,
  BuscarUsuario,
  validarPassword,
  updateEmpresaInfo,
  updateEmpresaPassword,
};
