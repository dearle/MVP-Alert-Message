var promise = require('bluebird');

var foo = function(str, callback){
	callback(str)
}

var bar = promise.promisify(foo);

bar('hello').then(function(result){console.log(result)}).catch(function(err){console.log('why you ', err)})