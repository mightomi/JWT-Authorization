const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const request = require('request');
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();

const PORT = 8080;
const jwtKey = process.env.JWT_SECRET_KEY;
const jwtExpirySeconds = 300;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser())


var users = {
    swastik: 'mypassword',
	aman_Gupta: "password",
};


// api to get the username for homepage
app.get("/username", (req, res) => {

    const token = req.cookies.token;

    // if cookies are not found, i.e the person is not logged in
    if (!token) {
        res.json({ username: 'UnsignedUser' });
    }
    else {
        var payload;
        try {
          payload = jwt.verify(token, jwtKey);
        } 
        catch (e) {
          return res.status(400).end();
        }

        res.json({ username: payload.username });
    }
});


app.post('/login', (req, res) => {

	const { username, password } = req.body;
	if (!username || !password || users[username] !== password) {
		return res.send('wrong crendentials')
	}

	// Create a new token with the username in the payload
	const token = jwt.sign({ username }, jwtKey, {
		algorithm: "HS256",
		expiresIn: jwtExpirySeconds,
	});
    console.log('login success, jwt stored in cookie');
	// console.log("token:", token);

	res.cookie("token", token, { maxAge: jwtExpirySeconds * 1000 })
	res.redirect('http://localhost:3000/');
});


app.post('/register', function(req, res){  
    users[req.body.username] = req.body.password;
    res.redirect('/login');
});


app.get('/logout', function(req, res){
    res.clearCookie('token');
    console.log('logged out, cookies cleared');
    res.redirect('http://localhost:3000/');
});


app.get('/api/currentPrice', (req, res) => {

    const token = req.cookies.token;

    // send data the JWT token to the server
    // the server with return back appropriate data
    var options = {
        'method': 'GET',
        'url': 'http://localhost:4000/assets',
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.send(response.body);
    });

});



app.listen(PORT);