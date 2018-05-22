const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema ({

    title: String,
    artist: String,
    description: String,
    year: String,
});

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;


