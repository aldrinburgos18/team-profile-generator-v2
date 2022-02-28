const fs = require("fs");

function writeToFile(pageContent) {
  fs.writeFile("./dist/index.html", pageContent, function (err) {
    if (err) throw err;
    console.log("File saved!");
  });

  fs.copyFile("./src/style.css", "./dist/style.css", function (err) {
    if (err) throw err;
  });
}

module.exports = writeToFile;
