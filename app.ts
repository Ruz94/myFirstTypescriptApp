import express from "express";

var app = express();
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

function addNumbersTypeScript(myArray: any[]): number {
  let number: number = 0;
  myArray.forEach((myNumber: number) => {
    number = number + myNumber;
  })
  return number;
};

const addNumbers = (myArray) => {
  let number = 0;
  myArray.forEach((myNumber) => {
    number = number + myNumber;
  });
  return number;
};

app.get("/url", (req, res, next) => {
  const response = addNumbersTypeScript([1, 2, 3, 4, 5]);
  res.json(response);
  //   res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
