const axios = require('axios');

test('test validar creación de empresa', async () => {
  const companyData = {
    nit: "1019152162-13",
    nombre_empresa: "prueba pw diferente03",
    direccion: "cl 1 # 2-3  ",
    email: "pruebapw080103@gmail.com",
    telefono_empresa: "3166991938",
    estatus: "activo",
    password: "LaCasaDeLola"
  };

  try {
    const response = await axios.post('http://localhost:3001/api/v1/Login/createEmpresa', companyData);
    expect(response.status).toBe(201);
    expect(response.data.message).toBe('La empresa fue creada correctamente');
  } catch (error) {
    console.error(error);
    throw error;
  }
});


