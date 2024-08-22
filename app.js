const express = require("express");
const app = express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const port = 3030;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layouts/boilerplate");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());


app.get("/", (req, res) => {
    res.send("hello");
});

app.get("/home", (req, res) => {
    res.render("listings/home"); 
});


app.get("/home/signup", (req, res) => {
    res.render("listings/signup"); 
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
