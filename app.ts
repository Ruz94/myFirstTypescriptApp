import * as express from "express";

const app = express();

function addNumbersTypeScript(myArray: any[]): number {
  let number: number = 0;
  myArray.forEach((myNumber: number) => {
    number = number + myNumber;
  })
  return number;
};

app.get("/url", (req, res, next) => {
  const response = addNumbersTypeScript([1, 2, 3, 4, 5, 6]);
  res.json(response);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});