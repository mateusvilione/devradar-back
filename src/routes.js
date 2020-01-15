const { Router } = require('express');
const axios = require('axios');
const Dev = require('../src/models/Dev');

const routes = Router();

// Métododos do HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

// Query params: request.query (Filtros, ordenação, paginação...)
// Route params: request.params (Identificar um recurso na alteração ou remoção)
// body: request.boby (Dados para criação ou alteração de um registro)

routes.post('/devs', async (request, response) => {
    const { github_username, techs } = request.body;

    const api_response = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, avatar_url, bio } = api_response.data;

    const techsArray = techs.split(',').map(tech => tech.trim());

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
    })

    return response.json({ message: dev });
});

module.exports = routes;
