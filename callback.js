var fs = require("fs"); // require is a special function provided by node
var myNumber = undefined; // we don't know what the number is yet since it is stored in a file

function addOne() {
  fs.readFile("Promises.txt", function doneReading(err, fileContents) {
    console.log(fileContents.toString());
    myNumber = fileContent;
  });
}

addOne();

console.log("this is not the addOne", myNumber);
