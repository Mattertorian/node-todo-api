var env = process.env.NODE_ENV || 'development';

if (env === 'production') {
    process.env.MONGO_URI = 'mongodb://Mattertorian:Wertis313@ds121534.mlab.com:21534/secret-harbor-26519';

} else if (env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGO_URI = 'mongodb://localhost:27017/TodoApp';

} else if (env === 'test') {
    process.env.PORT = 3000;
    process.env.MONGO_URI = 'mongodb://localhost:27017/TodoAppTest';
}