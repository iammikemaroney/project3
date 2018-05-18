
var cheerio = require("cheerio");
var request = require("request");

console.log("grabbing info from buzzfeed");

var Scraper = request("https://www.buzzfeed.com/angelameiquan/20-marijuana-recipes-that-coloradoans-and-washingt-70fn", function(error, response, html){
    var $ = cheerio.load(html);
    var results = [];

    $("div.subbuzz-image").each(function(i, element){
        var title = $(element).children().children("span").text().split(".")[1];
        var image = $(element).parent().find("img").attr("data-src");
        var link = $(element).find("big").find("a").attr("href");

    results.push(
        { 
            title: title
        },
        {
            image: image
        },
        {
            link: link
        }
    );
    });
    console.log(results)
});

export default Scraper

