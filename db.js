const mongoose = require('mongoose');
require('dotenv').config();

const DATABASE_KEY = process.env.DATABASE_KEY;
mongoose.connect(DATABASE_KEY, {
    useNewUrlParser: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});