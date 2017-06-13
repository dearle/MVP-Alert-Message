//Speech modifiers
const pirateSpeak = require('pirate-speak');
const l33t = require('1337');
var ermahgerd = require('node-ermahgerd');
const robotalk = require('robo-talk');
var piglatin = require('piglatin');

exports.alterText = function(text, mod) {
	switch(mod) {
      case 'leet':
        text = l33t(text);
        break;
      case 'pirate':
        text = pirateSpeak.translate(text);
        break;
      case 'ermahgerd':
        text = ermahgerd.translate(text);
        break;
      case 'robot':
        text = robotalk.encode(text);
        break;
      case 'piglatin':
        text = piglatin(text);
        break;
      default:
        break;
    }
    return text;
}