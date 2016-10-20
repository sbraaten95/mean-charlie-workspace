app.factory('customerFactory', ['$http', function ($http){
	var customers = [];
	var factory = {};

	factory.getCustomers = function (callback){
		$http.get('/customers').then((data) => {
			callback(data.data);
		});
	};

	factory.create = function (newCustomer, callback){
		$http.post('/customers', newCustomer).then((data) => {
			if (data.data.errors) {
				callback(data.data);
			} else {
				customers = data.data;
				callback(customers);
			}
		});
	};

	factory.delete = function (id, callback){
		$http.delete('/customers/' + id).then((data) => {
			customers = data.data;
			callback(customers);
		})
	};

	return factory;
}]);