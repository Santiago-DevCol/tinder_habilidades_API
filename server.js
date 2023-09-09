// Configuración del servidor
const express = require('express');

const server = express();

const port = 3000;

const Routes = require('./routes');
server.use(express.json());
server.use('/api/v1', Routes);

// host => localhost:3000/api/
server.listen(port, () => {
    console.log(`La API se encuentra escuchando en el puerto ${port}`)
});
/**
 * una forma de hacerlo
 * const Routes = require('./routes');
server.use('/clients',Routes.ClientRoutes);
server.use('/products',Routes.ProductoRoutes);
server.use('/sales',Routes.SaleRoutes);
 */
