var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/basic_mongoose')

var MongooseSchema = new mongoose.Schema({
	name: String,
});
mongoose.model('User', MongooseSchema);
var Mongoose = mongoose.model('User');

app.get('/', (request, response) => {
	User.find({}, (err, mongooses) => {
		if (err) {
			console.log("Error!");
		} else {
			response.render('index', {mongooses: mongooses});
		}
	});
});

app.get('/mongooses/:id', (request, response) => {
	id = 
	User.find({request.url.})
})