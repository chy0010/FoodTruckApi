require("dotenv").config();
const express = require('express');

const app = express();

const foodtrucksRouter = require("./api/routes/foodtrucks.router");
app.use("/api/foodtrucks", foodtrucksRouter);

app.get("/", (req, res) => {
  console.log("aaaaaaaaaaaaaaaaa1111111111111");

  res.send(
    `<html><body><h1>Hello World ${new Date().toDateString()}</h1></body></html>`
  );
});

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });