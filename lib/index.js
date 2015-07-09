// Dependencies
var Jade = require("jade")
  , Ul = require("ul")
  ;

// Init function
module.exports = function (social) {

    // Prepare processors, compile jade file
    var processor = Bloggify.processors.article
      , socialView = Jade.compileFile(__dirname + "/views/social.jade")
      ;

    // Add the new processor
    processor.push(function (lien, data, content) {
        var description = data.data.article.title + " " + Ul.clone(data.data.article.tags).map(function (c) {
                return "#" + c
            }).join(" ")
          , social = socialView({
                url: encodeURIComponent(data.data.article.fullUrl)
              , description: encodeURIComponent(description)
            })
          , index = content.indexOf("</body>")
          ;


        return content.slice(0, index) + social + content.slice(index);
    });
};
