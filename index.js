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
app.use(bodyParser.json())

app.use(morgan('combined'));
app.use(express.static('public'));

var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});
var User = mongoose.model('User', userSchema);

app.get('/users', function (req,res) {
	User.find(function (err, data) {
	  if (err) return console.error(err);
	  res.send(data);
	});
});
app.post('/users', function (req,res) {
	var name = req.body.name,
		username = req.body.username;
	var newUser = User({
	  name: name,
	  username: username,
	  password: 'password',
	  admin: true
	});
	newUser.save(function(err) {
	  if (err) throw err;
		console.log('Yupii !! User is created!');
	});	
});

app.listen(3000, function(){
	console.log("Hello server is listening on 3000");
});