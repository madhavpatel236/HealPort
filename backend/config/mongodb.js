// In this file we can connect our cluster and make a database for the project.

const mongoose = require("mongoose")

const connectDB = async () =>{
    await mongoose.connect(
        'mongodb+srv://madhavpatel236:4KJ3agcjTnMTLReZ@cluster0.pegi5.mongodb.net/'
    );
}

module.exports = connectDB