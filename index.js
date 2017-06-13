//Bare bones server intialization.

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

var helper = require('./helpers/helper');

const app = express()

const db = require('./db')

var Message = require('./models/message');

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, './node_modules')))
app.use(express.static(path.resolve(__dirname, './home')))

app.get('/history', function(req, res) {
  Message.find({}).exec(function(err, links) {
    if(err){
    	res.status(500).send(err);
    }
    	res.status(200).send(links);
  });

})

app.post('/message', function(req, res) {
  var newMessage = new Message({
  	user: 'Dwho',
  	text: req.body.text,
    mod: req.body.mod,
    modtext: helper.alterText(req.body.text, req.body.mod),
    number: req.body.number
  });
  newMessage.save(function(err, newMessage) {
  	if (err) {
        res.status(500).send(err);
    } else {
        res.status(200).send(newMessage);
    }
  });
})

app.listen(3000)
console.log('MVP-Alert-Message server running on :3000');
