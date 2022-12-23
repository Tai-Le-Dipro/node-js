const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");
const app = express();
const port = 3000;
const hbs = require("express-handlebars");
app.engine("handlebars", hbs.engine());

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));

app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/search?", (req, res) => {
  res.render("search");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
