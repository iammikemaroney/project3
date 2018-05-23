const cheerio = require("cheerio");
const request = require("request");
const bodyParser = require("body-parser");
const fs = require("fs");
const express = require("express");
const app = express();
// const routes = require("./routes");
const PORT = process.env.PORT || 3001;


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));


app.connect(process.env.MONGODB_URI || "mongodb://localhost/marijuanadb");


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

    fs.writeFile("./src/components/Scrape/recipes.json", JSON.stringify(results), function(err){
      if (err) console.log(err);

      console.log("Scrape transfer was successful");
    });
    res.status(200).json("scaping done");
  });
});

// console.log("grabbing info from buzzfeed");

app.listen(PORT, function() {
  console.log("You are connected to PORT", PORT);
});
