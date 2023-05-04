const express = require('express');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv').config();
const mongodb = require('mongodb');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const { errorHandler } = require('./middleware/errorMiddleware');
connectDB()

const app = express();
const port = process.env.Port || 2001;
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(require('./routes/userRoutes.js'));

const date = new Date().toISOString();
app.listen(port, () => console.log(`Server started on port ${port} at: ${date}`.yellow.underline));

app.use(errorHandler);

