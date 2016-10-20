app.controller('orderController', ['orderFactory', 'productFactory', 'customerFactory', function (oF, pF, cF){
	var _this = this;
	this.orders = [];
	this.customers = [];
	this.products = [];
	this.currentQuantity = [];

	function bindProductObject (){
		for (var i in _this.orders) {
			for (var j in _this.products) {
				if (_this.orders[i]._product == _this.products[j]._id) {
					_this.orders[i]._product = _this.products[j];
				}
			}
		}
	}

	this.newQuantity = function (){
		this.currentQuantity = [];
		for (var i = 1; i <= this.products[this.index].quantity; i++) {
			this.currentQuantity.push(i);
		}
	};

	this.getOrders = function (){
		oF.getOrders(function (data){
			_this.orders = data;
			bindProductObject();
		});
	};

	this.getCustomers = function (){
		cF.getCustomers(function (data){
			_this.customers = data;
		});
	};

	this.getProducts = function (){
		pF.getProducts(function (data){
			_this.products = data;
		});
	};

	this.getProducts();
	this.getCustomers();
	this.getOrders();

	this.create = function (){
		var order = {
			customer: this.newOrder.customer,
			quantity: this.newOrder.quantity,
			_product: this.products[this.index]._id
		}

		var update = {
			product_id: this.products[this.index]._id,
			quantity: this.products[this.index].quantity - this.newOrder.quantity
		}

		oF.create(order, function (data){
			_this.orders = data;
			bindProductObject();
		});

		pF.update(update, function (data){
			_this.products = data;
			_this.newQuantity();
		});
	};
}]);