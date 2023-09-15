
const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();
require('ejs');

const { sequelize, conectarDB } = require('./database');

const app = express()
const port = process.env.PORT || 4000;

conectarDB();

app.use(cors());
app.use(morgan("dev"))
app.use(express.json())

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.use(require('./routes/blog.routes'))


app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))