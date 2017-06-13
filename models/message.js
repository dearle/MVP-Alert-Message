var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
  user: String,
  text: String
});

//To create modified text using API's:

// messageSchema.pre('save', function(next){
  
// });

//To send message via Twillio????

module.exports = mongoose.model('Message', messageSchema);

