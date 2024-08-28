const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
require('./db');

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.URL
const categoryRouter = require('./routes/category.route');
const productRouter = require('./routes/product.route');
const userRouter = require('./routes/user.route');
const loginRouter = require('./routes/login');

app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/product', productRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/login', loginRouter);

app.listen(8000, console.log('Server is running on port 8000'));