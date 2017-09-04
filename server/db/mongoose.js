const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI = 'mongodb://Mattertorian:Wertis313@ds121534.mlab.com:21534/secret-harbor-26519', {useMongoClient: true});

module.exports = {
    mongoose
};