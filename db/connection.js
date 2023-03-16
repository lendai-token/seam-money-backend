const mongoose = require('mongoose');

function connectToDatabase() {
    mongoose.connect('mongodb://127.0.0.1:27017/seam', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('MongoDB successfully connected')
}

module.exports = {
    connectToDatabase: connectToDatabase,
};