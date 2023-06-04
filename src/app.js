const express = require("express");
const expHandleBar = require("express-handlebars");
const path = require("path");
const indexRoute = require("./routes/index.route.js");
const app = express();

//Settings handlebar
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  expHandleBar.engine({
    layoutDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
    helpers: require('./helpersHandlebars.js')
  })
);
app.set("view engine", ".hbs");




//middlewares
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(indexRoute);

module.exports = app;
