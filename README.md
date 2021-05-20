# JWT-Authorization

Used JWT to authorize API requests.

User can login or register

After a successfull login JWT token is created and stored in the browser cookie

When clicked on the API link, a GET request is sent to the API with header as the JWT token

API sends back partial data if not logged in, else send full data.


API is found in server.js

client folder contains the frontend


## Tech Stack

Frontend - ReactJs

Backend - NodeJS, Express, cookie-parser, jsonwebtoken, request


## How to start

1. Go to the directory of this project
2. run `npm app` to start the backend
3. run `npm server` to start the server API
4. Navigate to client folder, then run `npm start` to start the react app
