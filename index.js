const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 9000;

app.use("/api/", (_, res) => {
  res.json({ data: "API is accounted for" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// console.log("It's alive!!!!!!");
// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USER);
// console.log(process.env.PORT);
// console.log(process.env.GREET);
// console.log(process.env.FOOD);
