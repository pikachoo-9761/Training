const http = require('node:http');
const express = require('express');

const app = express();

app.set('view engine', 'vash');
app.set('views', './views');

app.get("/", (req, res) => {
    res.render('home',{
        title:'Home Page',
        username:'Home Page'
    });
});

app.get("/about", (req, res) => {
    res.render('about',{
        title:'about Page',
        username:'about Page'
    });
});

app.get("/contact", (req, res) => {
    res.render('contact',{
        title:'contact Page',
        username:'contact Page'
    });
});

const server = http.createServer(app);

server.listen(5000, () => {
    console.log("server started");
});
