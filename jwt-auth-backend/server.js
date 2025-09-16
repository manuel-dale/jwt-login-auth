const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

app.listen(PORT);