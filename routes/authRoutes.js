var express = require("express");
var authRoutes = express.Router();
var User = require("../models/userSchema");
var jwt = require("jsonwebtoken");
var config = require("../config");

authRoutes.post("/signup", function (req, res) {
    User.findOne({$or: [{email: req.body.email.toLowerCase()}, {username: req.body.username.toLowerCase()}]}, function (err, existingUser) {
        if (err) return res.status(500).send(err);
        console.log(existingUser);
        if (existingUser) {
            if (existingUser.email === req.body.email.toLowerCase()) {
                return res.status(403).send({success: false, message: "That email is already taken"})
            } else {
                return res.status(403).send({success: false, message: "That username is already taken"})
            }
        }
        var newUser = new User(req.body);
        newUser.save(function (err, userObj) {
            if (err) return res.status(500).send(err);
            return res.send(userObj)
        })
    })
});

authRoutes.post("/login", function (req, res) {
    User.findOne({email: req.body.email.toLowerCase()}, function (err, existingUser) {
        if (err) return res.status(500).send(err);
        if (!existingUser || existingUser.password !== req.body.password) {
            return res.status(401).send({success: false, message: "Email or password is incorrect"})
        }
        var token = jwt.sign(existingUser.toObject(), config.secret);
        return res.send({
            token: token,
            user: existingUser.toObject(),
            success: true,
            message: "Hi " + existingUser.name + "! Your auth token is verified"
        })

    })
});

module.exports = authRoutes;