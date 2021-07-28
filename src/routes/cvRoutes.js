const router = require('express').Router();

const { cvGenerator } = require('../services');

router.get('/zip', cvGenerator.getAll);
// router.post('/generate', cvGenerator.generate);
// router.get('/:username', cvGenerator.getByUsername);
// router.delete('/delete', cvGenerator.deleteAll);

module.exports = router;