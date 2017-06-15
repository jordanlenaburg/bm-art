var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var port = process.env.PORT || 8000;
var app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

mongoose.connect("mongodb://localhost/bm");

app.use("/favorites", require("./routes/favoritesRoute"));
app.use("/art", require("./routes/bmApiRoute"));
app.use("/img", require("./routes/imgRoute"));

app.use(express.static("public"));

app.listen(port, function () {
    console.log("The server is listening on port " + port)
});