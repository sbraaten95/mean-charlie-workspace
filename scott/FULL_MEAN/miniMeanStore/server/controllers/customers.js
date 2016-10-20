var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

function CustomersController (){
	var _this = this;

	this.index = function (req,res){
		Customer.find({}, (err, customers) => {
			if (err) {
				console.log(err);
			} else {
				res.json(customers);
			}
		});
	};
	this.create = function (req,res){
		var newCustomer = new Customer(req.body);
		newCustomer.save((err) => {
			if (err) {
				res.json(err);
			} else {
				_this.index(req, res);
			}
		});
	};
	this.delete = function (req,res){
		Customer.remove({_id: req.params.id}, (err) => {
			if (err) {
				console.log(err)
			} else {
				_this.index(req, res);
			}
		});
	};
}

module.exports = new CustomersController();