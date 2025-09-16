const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.listen(PORT);