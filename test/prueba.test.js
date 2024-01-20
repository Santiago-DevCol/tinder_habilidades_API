const axios = require('axios');
test('test validar creación de persona', async () => {
  let data = {
    "nombre_persona":"Jose4",
    "apellido_persona":"Alvarez4",
    "email":"jose4@gmail.com",
    "password":"jose4@gmail.com",
    "locacion":"soacha",
    "precio_servicio":"50000",
    "perfil":"persona altamente capacitada para contabilidad",
    "calificacion":"0",
    "status":"activo"
  }
  try {
    const response = await 
    axios.post('http://localhost:3001/api/v1/Login/createUser', data)
    expect(response.status).toBe(201);
    expect(response.data.message).toBe('El usuario fue creado correctamente');
  } catch (error) {
    console.error(error);
    throw error;
  }
}); 


