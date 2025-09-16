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

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];

        if (user && await bcrypt.compare(password, user.password)) {
            const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '10m' });

            return res.json({ accessToken });
        } else {
            
            return res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
});

app.listen(PORT);