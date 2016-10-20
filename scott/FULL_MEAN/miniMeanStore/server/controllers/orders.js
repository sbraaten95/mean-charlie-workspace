var mongoose = require('mongoose');
var Order = mongoose.model('Order');

function OrdersController (){
	var _this = this;

	this.index = function (req,res){
		Order.find({}, (err, orders) => {
			if (err) {
				console.log(err);
			} else {
				res.json(orders);
			}
		});
	};

	this.create = function (req,res){
		console.log(req.body);
		var newOrder = new Order(req.body);
		newOrder.save((err) => {
			if (err) {
				res.json(err);
			} else {
				_this.index(req, res);
			}
		});
	};
}

module.exports = new OrdersController();