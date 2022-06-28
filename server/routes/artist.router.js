// artist.router.js
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// DELETE an item
router.delete('/:id', (req, res) => {    
    let queryString = 'DELETE FROM "artists" WHERE id=$1'
    let values = [req.params.id];
    pool.query(queryString, values).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log(error);
    })
});

// POST all the artists
router.post('/', (req, res) => {
    let queryString = 'INSERT INTO "artists" ("name", "painting", "age") VALUES ($1, $2, $3)';
    let values = [req.body.name, req.body.painting, req.body.age];
    pool.query(queryString, values).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log(error);
    })
}); // END POST Route

// GET all the artists
router.get('/', (req, res) => {
    let queryString = 'SELECT * FROM "artists"'
    pool.query(queryString).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log(error)
    })
}); // END GET Route

module.exports = router;
