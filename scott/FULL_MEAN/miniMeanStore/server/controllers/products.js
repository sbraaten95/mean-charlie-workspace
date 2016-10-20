var mongoose = require('mongoose');
var Product = mongoose.model('Product');

function ProductsController (){
	var _this = this;

	this.index = function (req,res){
		Product.find({}, (err, products) => {
			if (err) {
				console.log(err);
			} else {
				res.json(products);
			}
		});
	};

	this.create = function (req,res){
		var newProduct = new Product(req.body);
		newProduct.save((err) => {
			if (err) {
				res.json(err);
			} else {
				_this.index(req, res);
			}
		});
	};

	this.update = function (req,res){
		console.log(req.body)
		Product.update({_id: req.body.product_id}, {quantity: req.body.quantity}, (err) => {
			if (err) {
				console.log(err);
			} else {
				_this.index(req, res);
			}
		});
	};
}

module.exports = new ProductsController();