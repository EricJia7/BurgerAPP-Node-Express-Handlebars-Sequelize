const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080; 
const app = express();

const db = require('./models');

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));

app.set("view engine", "handlebars");

// const routes = require('./controllers/burgers_controller.js');

// app.use(routes); 

require('./routes/html-routes.js')(app)
require("./routes/burger-api-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
