const path = require('path');
const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

// http://localhost:3000/lists/users
router.get('/users', (req, res, next)=>{
    console.log("/users => users");
    res.send(`
    <h1>Users Page</h1>
    `);
});

module.exports = router;