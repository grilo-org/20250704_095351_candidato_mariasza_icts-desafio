const routes = require('express').Router();

const CompraController = require('./app/controllers/compra');
const ProdutoController = require('./app/controllers/produto');

routes.get('/dashboard', (req, res) => {
  return res.status(200).send();
});

routes.post('/compra', CompraController.create);
routes.get('/compra', CompraController.findAll);
routes.get('/compra/:id', CompraController.findOne);
routes.put('/compra/:id', CompraController.update);
routes.delete('/compra/:id', CompraController.remove);

routes.post('/produto', ProdutoController.create);
routes.get('/produto', ProdutoController.findAll);
routes.get('/produto/:id', ProdutoController.findOne);
routes.put('/produto/:id', ProdutoController.update);
routes.delete('/produto/:id', ProdutoController.remove);

module.exports = routes;
