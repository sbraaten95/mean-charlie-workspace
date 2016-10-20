app.factory('orderFactory', ['$http', function ($http){
	var orders = [];
	var factory = {};

	factory.getOrders = function (callback){
		$http.get('/orders').then((data) => {
			callback(data.data);
		});
	};

	factory.create = function (newOrder, callback){
		$http.post('/orders', newOrder).then((data) => {
			orders = data.data;
			callback(orders);
		});
	};

	return factory;
}]);