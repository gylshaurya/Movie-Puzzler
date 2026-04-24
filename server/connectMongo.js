const mongoose = require('mongoose');

async function connectMongoDB(url){
    mongoose.connect(url)
    .then(()=>console.log('MongoDB Connected'))
    .catch((error) => console.log("MongoDB Connection Error", error))
}

module.exports = connectMongoDB