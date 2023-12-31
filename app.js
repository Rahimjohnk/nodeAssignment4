// npm init
// npm i nodemon --save-dev
// npm i --seve express

// npm i --save body-parser 
// npm i --save ejs
const path = require('path');

const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const entryFormRoutes = require('./routes/entryForm');
// const usersRoutes = require('./routes/users');
const usersDataObj = require('./routes/users');

app.use(express.static(path.join(__dirname, 'public')));

app.use(entryFormRoutes);
app.use('/lists', usersDataObj.routes);

// http://localhost:3000/lists/users/dfdfd
app.use((req, res, next) => {
    // res.send(`
    // <h1>Page Not Found</h1>
    // `);
    res.render('404', {
        pageTitle: "404",
        content: "page not found"
    });
});
  
app.listen(3000);