var filterFn = require("./mymodule");

var folder = process.argv[2];
var ext = process.argv[3];

filterFn(folder, ext, (err, list) => {
  if (err) console.log("there s an error", err);
  list.forEach((file) => console.log(file));
});
