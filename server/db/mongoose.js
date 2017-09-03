const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds121534.mlab.com:21534/secret-harbor-26519' || 'mongodb://localhost:27017/TodoApp', {useMongoClient: true});

module.exports = {
    mongoose
};