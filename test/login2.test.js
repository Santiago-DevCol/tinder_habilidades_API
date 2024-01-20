const axios = require('axios');

test('test validar funcion login', async () =>{
  let user={email:'pruebapw050105@gmail.com',password:'LaCasaDeLola', type: 'empresa'};

  const response = await axios.post('http://localhost:3001/api/v1/Login/', user);

  expect(response.status).toBe(200);
});

