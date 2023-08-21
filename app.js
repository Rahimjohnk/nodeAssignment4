// npm init
// npm i nodemon --save-dev
// npm i --seve express
const path = require('path');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("Starting....");
});
  
  app.listen(3000);