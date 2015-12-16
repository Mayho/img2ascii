var ImageToAscii = require("image-to-ascii");

ImageToAscii(__dirname + "/octocat.png", function(err, converted) {
  console.log(err || converted);
});
