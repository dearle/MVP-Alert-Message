const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/myDB');

const db = mongoose.connection
db.on('error', (err) => console.error('Mongo connection problem:', err));
db.once('open', () => console.log('Mongo connection sucessful!'));

module.exports = db
