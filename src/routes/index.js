const router = require('express').Router();

const { combine } = require('../middlewares');

const cvRoutes = require('./cvRoutes');

/*
 Composing multiple middleware functions
 into a single request middleware handler
*/

router.use(combine);

router.use('/cv', cvRoutes);

module.exports = router;