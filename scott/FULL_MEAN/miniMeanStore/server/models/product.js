var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	quantity: Number
}, {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
});

var Product = mongoose.model('Product', ProductSchema);