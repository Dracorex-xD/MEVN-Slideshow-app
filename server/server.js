const express = require('express');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv').config();
const mongodb = require('mongodb');

const app = express();
const port = process.env.Port || 2001;
app.use(cors());
app.use(express.json());

const date = new Date().toISOString();
app.listen(port, () => console.log(`Server started on port ${port} at: ${date}`.yellow.underline));

