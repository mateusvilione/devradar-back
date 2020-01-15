const { Router } = require('express');

const routes = Router();

// Métododos do HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

// Query params: request.query (Filtros, ordenação, paginação...)
// Route params: request.params (Identificar um recurso na alteração ou remoção)
// body: request.boby (Dados para criação ou alteração de um registro)

routes.get('/', (request, response) => {
    return response.json({ message: "hello world!!!" });
});

module.exports = routes;
