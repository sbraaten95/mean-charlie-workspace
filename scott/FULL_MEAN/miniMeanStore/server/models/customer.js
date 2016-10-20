var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
	name: {type: String, unique: true}
}, {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
});

var Customer = mongoose.model('Customer', CustomerSchema);