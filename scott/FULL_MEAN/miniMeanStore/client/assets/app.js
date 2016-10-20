var app = angular.module('app', ['ngRoute']);

app.config(($routeProvider) => {
	$routeProvider.when('/customers', {
		controller: 'customerController',
		templateUrl: 'partials/customers.html'
	}).when('/products', {
		controller: 'productController',
		templateUrl: 'partials/products.html'
	}).when('/orders', {
		controller: 'orderController',
		templateUrl: 'partials/orders.html'
	}).otherwise({
		redirectTo: '/'
	});
});

console.log('app.js done');