const connection = require("../knexfile")['development'];
const bcrypt = require("bcrypt");

const database = require('knex')(connection);


const createPersona = async (persona) => {

   try{
      let hashPw = persona.password;

      persona.password = await encryptPassword(hashPw);
      //console.log(persona);

      return database('personas')
      .insert(persona);
   }catch(error){
      console.log(`parece que hay un error: ${error}`);
   }

};

 const getPersona = (persona) => {
   let personaid= atob(persona);
   //console.log('persona',personaid)
   return database('personas')
   .where({id_persona:personaid});
};
const getAllPersonas = () => {
   return database.select('*').from('personas');
};

async function encryptPassword(pw) {
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
    createPersona,
    getPersona,
    getAllPersonas
 };