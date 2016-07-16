var express = require('express'),
	app = express(),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose  = require('mongoose'),
	Schema = mongoose.Schema,
	path = require('path');

mongoose.connect('mongodb://localhost:27017/nodetest');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use(morgan('combined'));
app.use(express.static('public'));

var userSchema = new Schema({
  bookname : { type: String, required: true, unique: true },
  authourname: String,
  price: Number
});
var User = mongoose.model('User', userSchema);

app.get('/users', function (req,res) {
	User.find(function (err, data) {
	  if (err) return console.error(err);
	  res.send(data);
	});
});
app.post('/users', function (req,res) {
	var bookname = req.body.book_name,
		authourname = req.body.authour_name,
		price = req.body.price;
	var newUser = User({
	  bookname: bookname,
	  authourname: authourname,
	  price: price
	});
	newUser.save(function(err) {
	  if (err) throw err;
	  res.send('Yupii !! User is created!');
		console.log('Yupii !! User is created!');
	});	
});

app.listen(3000, function(){
	console.log("Hello server is listening on 3000");
});