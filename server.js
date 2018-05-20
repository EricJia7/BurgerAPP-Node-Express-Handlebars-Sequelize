const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 8080; 

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));

app.set("view engine", "handlebars");

const routes = require('./controllers/burgers_controller.js');

app.use(routes); 

app.listen(PORT, ()=> {
    console.log('Server is listening on http://localhost:' + PORT);

});

