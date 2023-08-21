// npm init
// npm i nodemon --save-dev
// npm i --seve express

// npm i --save body-parser 
const path = require('path');

const express = require('express');

const app = express();

const entryFormRoutes = require('./routes/entryForm');
// const usersRoutes = require('./routes/users');
const usersDataObj = require('./routes/users');

app.use(entryFormRoutes);
app.use('/lists', usersDataObj.routes);

// http://localhost:3000/lists/users/dfdfd
app.use((req, res, next) => {
    res.send(`
    <h1>Page Not Found</h1>
    `);
});
  
app.listen(3000);