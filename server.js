const express = require("express");
const app = express();

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const PORT = 4000;
const jwtKey = process.env.JWT_SECRET_KEY;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


const partialData = {
    'bitcoin': 4012
}
const fullData = {
    'bitcoin': 4012,
    'etherium': 301 ,
    'ripple': 0.131 ,
    'tether': 1.001, 
    'binance': 3.41
}


app.get('/assets', (req, res) => {

    const authHeader = req.headers['authorization'];

    // check if no authorization was provided
    if(authHeader == null) {
        console.log("no auth found");
        return res.status(400).end();
    }

    const token = authHeader.split(' ')[1]

    // check if token provided was undefined, i.e user wasn't logged in
    // return partial data only
    if (token == 'undefined') {
        
        return res.json(partialData);
    }

    // check if the JWT token we got is valid or not
    var payload;
    try {
        payload = jwt.verify(token, jwtKey);
    } 
    catch (e) {
        return res.status(400).end();
    }

    // if the JWT token was valid i.e the user was authentic and logged in
    // send full data
    return res.json(fullData);

});

app.listen(PORT, ()=> { console.log(`server running at ${PORT}`); })