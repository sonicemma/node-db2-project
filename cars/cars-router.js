const express = require('express');
const knex = require('knex');

const knexfile = require('../knexfile');
const db = knex(knexfile.development);

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then( cars => {
            res.json({data: cars})
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
})

router.post('/', (req, res) => {
    db('cars')
        .insert(req.body)
        .then(ids => {
            res.status(201).json({ data: ids[0]})
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
})


module.exports = router;
