var dotenv = require('dotenv');
const mongoose = require('Mongoose');

dotenv.config();

// Connect MongoDB database
const connect = () => {
    mongoose.connect(process.env.DB_CONNECTION_STRING,
        {
            userURLParser: true
        },
        () => {
            console.log("Connected DB : " + process.env.DB_CONNECTION_STRING)
        }
    );
}
module.exports = {
    connect
}