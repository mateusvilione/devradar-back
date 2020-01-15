const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Métododos do HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

// Query params: request.query (Filtros, ordenação, paginação...)
// Route params: request.params (Identificar um recurso na alteração ou remoção)
// body: request.boby (Dados para criação ou alteração de um registro)

routes.post('/devs', DevController.strore);

routes.get('/devs', DevController.index);

routes.get('/search', SearchController.index);

module.exports = routes;
