var customers = require('../controllers/customers.js');
var products = require('../controllers/products.js');
var orders = require('../controllers/orders.js');

module.exports = (app) => {
	app.get('/customers', customers.index);
	app.post('/customers', customers.create);
	app.delete('/customers/:id', customers.delete);
	app.get('/products', products.index);
	app.post('/products', products.create);
	app.put('/products', products.update);
	app.get('/orders', orders.index);
	app.post('/orders', orders.create);
};