const router = require('express').Router();
const Laws = require('./models/Laws');

router.get('./', (req, res) => {
    Laws.findAll().then((lawData) => {
        res.json(lawData);
        console.log(lawData);
    })
})