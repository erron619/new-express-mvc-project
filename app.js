// const config     = require("config");
const express    = require("express");
const livereload = require("./middleware/livereload");

// configuration
const app = express();

// middleware
app.use(livereload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

// template engine:
app.set("view engine", "ejs");
app.set("views", "./views/pages");

// routes
// app.use("your route", require("./routes/my route"));

// port
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`server is listening on port ${port}...`)});