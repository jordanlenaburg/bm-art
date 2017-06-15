var express = require("express");
var favoritesRoute = express.Router();
var Favorite = require("../models/favoritesSchema");

favoritesRoute.get("/", function (req, res) {
    Favorite.find(function (err, favorites) {
        if (err) return res.status(500).send(err);
        return res.send(favorites)
    })
});
favoritesRoute.post("/", function (req, res) {
        var fav = new Favorite(req.body);
        fav.save(function (err, newFav) {
            if (err) return res.status(500).send(err);
            return res.status(201).send(newFav)
        })
    // }
});
favoritesRoute.get("/:id", function (req, res) {
    Favorite.findById(req.params.id, function (err, fav) {
        if (err) return res.status(500).send(err);
        return res.send(fav)
    })
});
favoritesRoute.put("/:id", function (req, res) {
    Favorite.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedFav) {
        if (err) return res.status(500).send(err);
        return res.send(updatedFav);
    })
});
favoritesRoute.delete("/:id", function (req, res) {
    Favorite.findByIdAndRemove(req.params.id, function (err, deletedFav) {
        if (err) return res.status(500).send(err);
        return res.send(deletedFav);
    })
});
module.exports = favoritesRoute;