const express = require("express");
const app = express();

const PORT = process.env.PORT;

const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT);