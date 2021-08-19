"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();

var addNumbers = function (myArray) {
  var number = 0;
  myArray.forEach(function (myNumber) {
    number = number + myNumber;
  });
  return number;
};

app.get("/url", function (req, res, next) {
  var response = addNumbers([1, 2, 3, 4, 5, 6]);
  res.json(response);
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
