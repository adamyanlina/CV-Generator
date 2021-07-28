const router = require('express').Router();

const { cvGenerator } = require('../services');

router.post('/generate', cvGenerator.generateZIP);

module.exports = router;