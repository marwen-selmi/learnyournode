// var fs = require("fs");
// var path = require("path");

// var folder = process.argv[2];
// var ext = "." + process.argv[3];

// fs.readdir(folder, (err, files) => {
//   if (err) console.error(err);
//   files.forEach((file) => {
//     if (file.includes(".") && file.split(".").pop() === process.argv[3]) {
//       console.log(file);
//     }
//   });
// });

// //another soloution
// var fs = require("fs");
// var path = require("path");

// var folder = process.argv[2];
// var ext = "." + process.argv[3];

// const getFiles = (folder, filterStr, callback) => {
//   fs.readdir(folder, (err, files) => {
//     if (err) console.log(err);
//     filtredfiles = files.filter((file) => path.extname(file) === filterStr);
//     callback(filtredfiles);
//   });
// };

// getFiles(folder, ext, (filtredfiles) => {
//   filtredfiles.forEach((file) => console.log(file));
// });

const fs = require("fs");
const path = require("path");

const folder = process.argv[2];
const ext = "." + process.argv[3];

const getFiles = (folder, filterStr, callback) => {
  fs.readdir(folder, (err, files) => {
    if (err) console.error("this is an error", err);
    filesFiltred = files.filter((file) => path.extname(file) === filterStr);
    callback(filesFiltred);
  });
};

getFiles(folder, ext, (files) => {
  files.forEach((file) => console.log(file));
});
