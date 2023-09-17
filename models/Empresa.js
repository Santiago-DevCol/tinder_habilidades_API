const connection = require("../knexfile")['development'];
const bcrypt = require("bcrypt");

const database = require('knex')(connection);


 const createEmpresa = async (empresa) => {

   try{
      let hashPw = empresa.password;

      empresa.password = await encryptPassword(hashPw);
      //console.log(empresa);

      return database('empresa')
      .insert(empresa);
   }catch (error){  

   }
 };
 const getEmpresa = (empresa) => {
   let empresaid = empresa;
   // console.log('empresa',empresa)
   return database('empresa')
   .where({id:empresaid})
   // .then((respuesta) => {
   //    return respuesta.message[empresa];
   // });
};
/*Or const getOneClient = (id) => {
   return database.select('*').from('cliente').where('dni',id);
} */
const getAllEmpresas = (empresa) => {
   return database.select('*').from('empresa');
};

async function encryptPassword (pw){
   const rounds = 10;
   try{
      const hashPassword = await bcrypt.hash(pw, rounds);
      //console.log(hashPassword)
      return hashPassword;
   }catch (error){
      console.log(`parece que hay un error: ${error}`);
   }
}

 module.exports = {
    createEmpresa,
    getEmpresa,
    getAllEmpresas
 };