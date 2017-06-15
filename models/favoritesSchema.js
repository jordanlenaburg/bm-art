var mongoose = require("mongoose");

var favoriteSchema = new mongoose.Schema({
    year: {
        type: Number,
        required: true
    },
    artist: String,
    imageUrls: [String],
    category: String,
    url: String,
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    whyLiked: String,
    location_string: String,
    location: {
        hour: Number,
        minute: Number,
        distance: Number,
        category: String,
    }
});

module.exports = mongoose.model("Favorite", favoriteSchema)