var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new mongoose.Schema({
	customer: String,
	quantity: Number,
	_product: {type: Schema.Types.ObjectId, ref: 'Product'}
}, {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
});

var Order = mongoose.model('Order', OrderSchema);