const mongoose = require('mongoose');
require('dotenv').config();
const uri = `mongodb+srv://${process.env.MONGO_USERID}:${process.env.MONGO_PASSWORD}@cluster0.82bd9jl.mongodb.net/test`;
mongoose.set('strictQuery', false);
const connectDb = () => {
    mongoose
        .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('CONNECTION SUCCESSFUL'))
        .catch((err) => console.log(err));
};
module.exports = connectDb;
