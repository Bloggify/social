const $ = require("elly");

const $social = $("<div>", { "class": "social" });
const url = encodeURIComponent($("meta[property='og:url']").content);
const description = encodeURIComponent($("meta[property='og:title']").content);

const links = {
    facebook: "https://www.facebook.com/sharer/sharer.php?u=" + url
  , twitter: "http://twitter.com/intent/tweet?text=" + description + "&url=" + url
  , google: "https://plus.google.com/share?url=" + url
};

let lnk = type => {

    let $a = $("<a>", {
        "class": `mt-${type} mt-share-inline-square-sm`
      , href: links[type]
    });

    $a.appendChild(
        $("<img>", {
            src: "http://mojotech-static.s3.amazonaws.com/" + type + "@2x.png"
        })
    );

    switch (type) {
        case "facebook":
            break;
    }

    return $a;
}

$social.appendChild(lnk("facebook"));
$social.appendChild(lnk("twitter"));
$social.appendChild(lnk("google"));

document.addEventListener("DOMContentLoaded", () => {
    $("body").appendChild($social);
});
