const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/albumlist", 
  { useMongoClient: true }
);

const albumSeed = [
  {
    title: "Axis: Bold as Love",
    artist: "Jimi Hendrix",
    year: "",
    description: ""
  },
  {
    title: "Dummy",
    artist: "Portishead",
    year: "",
    description: ""
  },
  {
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    year: "",
    description: ""
  },
  {
    title: "Labor Days",
    artist: "Aesop Rock",
    year: "",
    description: ""
  },
  {
    title: "Rubber Soul",
    artist: "The Beatles",
    year: "",
    description: ""
  },
  {
    title: "Kid A",
    artist: "Radiohead",
    year: "",
    description: ""
  },
  {
    title: "Live/Dead",
    artist: "The Grateful Dead",
    year: "",
    description: ""
  },
  {
    title: "Surrealistic Pillow",
    artist: "Jefferson Airplane",
    year: "",
    description: ""
  },
  {
    title: "Merriweather Post Pavillion",
    artist: "Animal Collective",
    year: "",
    description: ""
  },
  {
    title: "African Herbsman",
    artist: "Bob Marley",
    year: "",
    description: ""
  },
  {
    title: "Enter teh Wu-Tang (36 Chambers",
    artist: "Wu Tang Clan",
    year: "",
    description: ""
  },
  {
    title: "Another Green World",
    artist: "Brian Eno",
    year: "",
    description: ""
  },
  {
    title: "Voodoo",
    artist: "D'Angelo",
    year: "",
    description: ""
  },
  {
    title: "Aquemini",
    artist: "Outkast",
    year: "",
    description: ""
  },
  {
    title: "Bitches Brew",
    artist: "Miles Davis",
    year: "",
    description: ""
  },
  {
    title: "Head Hunters",
    artist: "Herbie Hancock",
    year: "",
    description: ""
  },
    
];

db.Album
  .remove({})
  .then(() => db.album.collection.insertMany(albumSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
