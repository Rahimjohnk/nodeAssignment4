const path = require('path');
const rootDir = require('../util/path');

const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const users = [];

// app.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.urlencoded({ extended: false }));
// http://localhost:3000/lists/users
router.use('/users', (req, res, next)=>{
    // console.log("/users => users");
    // res.send(`
    // <h1>Users Page</h1>
    // `);
    users.push({userName: req.body.username});
    // ********************************
    // without Templating Engines we can pass data into teplate is it ?
    // with templateing engines we can pass data easily. 
    // ********************************
    // console.log("/users => users", req.body.username);
    res.sendFile(path.join(rootDir , 'views', 'users.html'));
});
exports.routes = router;
exports.users = users;
// module.exports = router;