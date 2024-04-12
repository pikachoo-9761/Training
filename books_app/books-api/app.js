
const http = require('node:http');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); //load the env variables from the .env file.
const cors = require('cors');
var { expressjwt: jwt } = require("express-jwt");
const {booksRouter} = require('./Routes/books-routes');
const {authRouter} = require('./Routes/auth-routes');
const mongoose = require('mongoose');

//connect to the database
const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((error) => {
        console.error('Error connecting to the database');
        console.error(error);
        process.exit(1);
    });

//create express app
const app = express();

//configure the middlewares
app.use(cors());
app.use(express.json());
app.use("/api/books",jwt({secret: process.env.JWT_SECRET, algorithms: ["HS256"] }), booksRouter);
//app.use("/api/books", booksRouter)
app.use("/api/auth", authRouter);

//start the server
const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`server started on port ${port}`);
});