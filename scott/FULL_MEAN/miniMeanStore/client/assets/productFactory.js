app.factory('productFactory', ['$http', function ($http){
	var products = [];
	var factory = {};

	factory.getProducts = function (callback){
		$http.get('/products').then(function (data){
			callback(data.data);
		});
	};

	factory.create = function (newProduct, callback){
		$http.post('/products', newProduct).then((data) => {
			if (data.data.errors) {
				callback(data.data);
			} else {
				products = data.data;
				callback(products);
			}
		});
	};

	factory.update = function (update, callback){
		$http.put('/products', update).then((data) => {
			products = data.data;
			callback(products);
		})
	}

	return factory;
}])