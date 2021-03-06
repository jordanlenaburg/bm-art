var express = require("express");
var request = require("request");
var bmRoute = express.Router();
var config = require("../config");
bmRoute.get("/", function (req, res) {
    var url = "https://api.burningman.org/api/v1/art";
    request.get({url:url, qs:req.query}, function (err, response, body) {
        console.log('error:', err); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body);
        res.send(body)
    }).auth(config.authKey, "");
});
bmRoute.get("/:id", function (req, res) {
    request.get("https://api.burningman.org/api/v1/art/" + req.params.id, function (err, response, body) {
        console.log('error:', err); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body);
        res.send(body)
    }).auth(config.authKey, "");
});
module.exports = bmRoute;