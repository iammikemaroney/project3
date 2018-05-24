const dotenv = require("dotenv").config();
const express = require("express");
const path = require("path");
const passport = require("./passport/passport");
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan")("tiny");
const cheerio = require("cheerio");
const request = require("request");
const routes = require("./controllers");

const PORT = process.env.PORT || 3001;
const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/marijuanaDB");

//#region MIDDLEWARE

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//passport
app.use(session({ 
  secret: "I 4m 4bs0lut3ly aw3s0m3!", 
  resave: true, 
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection}) 
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(logger);
app.get("/scrape", function(req, res){
  request("https://www.buzzfeed.com/angelameiquan/20-marijuana-recipes-that-coloradoans-and-washingt-70fn", function(error, response, html){
    var $ = cheerio.load(html);
    var results = [];

    $("h3.subbuzz__title").each(function(i, element){
      var title = $(element).children("span").text().split(".")[1];
      var image = $(element).siblings("figure").find("img").attr("data-src");
      var link = $(element).siblings("figure").find("big").find("a").attr("href");

      results.push(
        { title: title,
          image: image,
          link: link }
      )
      ;
      console.log(res);
    });

    fs.writeFile("./client/src/components/Scrape", JSON.stringify(results), function(err){
      if (err) console.log(err);

      console.log("Scrape transfer was successful");
    });
    res.status(200).json("scaping done");
  });
});

//controllers
app.use(routes);

//#endregion MIDDLEWARE

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
