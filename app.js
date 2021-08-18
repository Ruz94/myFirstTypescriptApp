"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
function addNumbersTypeScript(myArray) {
    var number = 0;
    myArray.forEach(function (myNumber) {
        number = number + myNumber;
    });
    return number;
}
;
var addNumbers = function (myArray) {
    var number = 0;
    myArray.forEach(function (myNumber) {
        number = number + myNumber;
    });
    return number;
};
app.get("/url", function (req, res, next) {
    var response = addNumbersTypeScript([1, 2, 3, 4, 5, 6]);
    res.json(response);
    //   res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
app.listen(3000, function () {
    console.log("Server running on port 3000");
});
