require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const app = express();
const cors = require('cors')

app.use(express.json());

app.use(cors({
    origin: '*'
}));

const register = require('./routes/signup')
const login = require('./routes/login')
const car = require('./routes/car')
const saved = require('./routes/saved')
app.get('/',(req,res)=>{
    return res.status(200).send('hello world !')
})
app.use('/register',register)
app.use('/login',login)
app.use('/car',car)
app.use('/saved',saved)

module.exports = app;