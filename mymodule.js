var fs = require("fs");
var path = require("path");

module.exports = function (dir, extFilter, callback) {
  fs.readdir(dir, (err, files) => {
    if (err) return callback(err);
    filtredFiles = files.filter(
      (file) => path.extname(file) === "." + extFilter
    );
    callback(null, filtredFiles);
  });
};
