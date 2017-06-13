var mongoose = require('mongoose');
var Promise = require('bluebird');
var config = require('./../config/config')


//Speech modifiers
const yodaSpeak = require('yoda-speak');
var yoda = new yodaSpeak(config.MASHAPE_API_KEY);

//Twilio Sms API
var twilio = require('twilio');
var twilioClient = new twilio(config.accountSid, config.authToken);

var messageSchema = new mongoose.Schema({
  user: String,
  text: String,
  mod: String,
  modtext: String,
  number: Number
});

//To create modified text using async API's:

messageSchema.pre('save', function(next){
  if (this.mod === 'yoda'){
  	
  	//failed to promisify yoda.convert
	  var yodify = Promise.promisify(yoda.convert);
  	// return yodify(this.modtext).bind(this)
  	//   .then (function(yody) {
  	//   	console.log(yody);
   //      this.modtext = yody;
   //      next();
   //    })
   //    .catch (function(result){
   //    	console.error("Failed to yodify:" + result);
   //    })
 	  yoda.convert(this.modtext, function(err, result) {
    	if (!err) {
        	console.log(result.toString());
        	this.modtext = result.toString();
          next();
    	} else {
        	console.log(err);
    	}
	  }.bind(this));
  } else{
    next();
  }
});

messageSchema.post('save', function(next){
  if(this.number === 4014501880 || this.number === 3172245032){
    twilioClient.messages.create({
      body: this.modtext,
      to: '+1' + this.number,  // Text this number
      from: config.twilioNum // From a valid Twilio number
    })
    .then((message) => {
      console.log(message.sid);
      next();
    });
  }
});

//To send message via Twillio????

module.exports = mongoose.model('Message', messageSchema);

