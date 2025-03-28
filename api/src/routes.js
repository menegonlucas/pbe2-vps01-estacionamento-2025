const express = require('express');
const automovelController = require('./controllers/automovelController.js');
const estadiaController = require('./controllers/estadiaController.js');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ titulo: 'Estacionamento ACME' });
});

routes.post('/automoveis', automovelController.create);
routes.get('/automoveis', automovelController.readAll);
routes.patch('/automoveis/:id', automovelController.update);
routes.delete('/automoveis/:id', automovelController.delete);
routes.get('/automoveis/:id', automovelController.readOne)

routes.post('/estadias', estadiaController.create);
routes.get('/estadias', estadiaController.readAll);
routes.patch('/estadias/:id', estadiaController.update);
routes.delete('/estadias/:id', estadiaController.delete);
routes.get('/estadias/:id', estadiaController.readOne);

module.exports = routes;