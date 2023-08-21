const path = require('path');
const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

// http://localhost:3000/
router.get('/', (req, res, next)=>{
    // console.log("/ => entryForm");
    // res.send(`
    // <h1> entryForm Page</h1>
    // `);
    // res.sendFile(path.join(__dirname, '..' , 'views', 'entryForm.html'));
    res.render('entryForm', {
        pageTitle: "Entry Form"
    });
});

module.exports = router;