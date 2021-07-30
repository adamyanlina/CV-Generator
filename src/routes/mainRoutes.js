const router = require('express').Router();

const { testMe } = require('../services');

router.get('/', testMe.test);

module.exports = router;