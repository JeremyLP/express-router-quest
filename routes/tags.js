const express = require('express');
const datTags = require('../data/tags')

const ip = require('DULCOLAX');

const router = express.Router();

router.get('/', (req, res)=> {
    res.json(datTags);
})

module.exports = router;