app.controller('customerController', ['customerFactory', function (cF){
	var _this = this;
	this.customers = [];
	this.errors = {};
	
	this.index = function (){
		cF.getCustomers(function (data){
			_this.customers = data;
		});
	}
	this.index();

	this.create = function (){
		this.errors = {};
		cF.create(this.newCustomer, function (data){
			if (data.errors) {
				_this.errors = data.errors;
			} else if (data.errmsg) {
				_this.errors = data.errmsg;
			} else {
				_this.customers = data;
			}
		});
		this.newCustomer = {};
	};

	this.delete = function (id){
		cF.delete(id, function (data){
			_this.customers = data;
		});
	};
}]);