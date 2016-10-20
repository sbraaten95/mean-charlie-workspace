var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.factory('factory', ['$http', function ($http){
	var users = [];
	var factory = {};

	factory.getUsers = function (){
		return users;
	}

	factory.register = function (newUser, callback){
		$http.post('/register', newUser).then(function (data){
			console.log(data);
			if (data.data.errors) {
				callback(data);
			} else {
				callback(data);
			}
		})
	}

	factory.login = function (triedUser, callback){
		$http.post('/login', triedUser).then(function (data){
			console.log(data);
		})
	}

	return factory;
}]);

app.controller('controller', ['factory', function (factory){
	this.users = factory.getUsers();
	var _this = this;

	this.register = function (){
		this.errors = {};
		factory.register(this.newUser, function (data){
			if (data.data.errors) {
				_this.errors = data.data.errors;
				console.log(_this.errors)
			} else {
				_this.users = data.data;
			}
		});
		console.log(this.users);
	};

	this.login = function (){
		factory.login(this.inputUser, function (data){
			console.log(data)
		});
	};
}]);