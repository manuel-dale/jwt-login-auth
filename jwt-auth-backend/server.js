const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const cors = require('cors');

app.listen(PORT);