var express = require("express");
var request = require("request");
var imgRoute = express.Router();
imgRoute.get("/", function (req, res) {
    var url = "http://galleries.burningman.org/pages/view.php";
    request.get({url:url, qs:req.query}, function (err, response, body) {
        console.log('error:', err); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body);
        res.send(body)
    })
});
module.exports = imgRoute;