const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://AbhinShetty07:Qwert01@cluster0.xevyopf.mongodb.net/"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
}

module.exports = connectToMongo;