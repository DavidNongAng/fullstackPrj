const mongoose = require('mongoose');

// All mongoose methods return a promise so they are asynchronous.
const connectDB = async () => {
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
    }catch(err){
        console.log(err);
        process.exit(1); //exit with faiure.
    }
};

module.exports = connectDB;