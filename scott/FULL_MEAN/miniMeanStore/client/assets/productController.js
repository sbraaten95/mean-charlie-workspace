app.controller('productController', ['productFactory', function (pF){
	var _this = this;
	this.products = [];
	this.errors = {};

	this.populate = () => {
		var arr = [];
		for (var i = 1; i <= 50; i++) {
			arr.push(i);
		}
		return arr;
	};
	this.maxProducts = this.populate();
	
	this.index = function (){
		pF.getProducts(function (data){
			_this.products = data;
		});
	};
	this.index();

	this.create = function (){
		this.errors = {};
		pF.create(this.newProduct, function (data){
			if (data.errors) {
				_this.errors = data.errors;
			} else if (data.errmsg) {
				_this.errors = data.errmsg;
			} else {
				_this.products = data;
			}
		});
		this.newProduct = {};
	};
}]);