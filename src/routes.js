const { Router } = require('express');
const DevController = require('./controller/DevController');
const SearchController = require('./controller/SearchController');

const routes = Router();


//Tipos de parametros
/*  Query Params: request.query (requisição usada para filtros, ordenação, paginação, etc)
    Route Params: request.params (identificação no recurço na alteração ou remoção de um registro)
    Body: request.body (Dados para criação ou alteração de um registro) */

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);
module.exports = routes;