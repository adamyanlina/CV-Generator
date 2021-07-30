const router = require('express').Router();

const { combine } = require('../middlewares');

const cvRoutes = require('./cvRoutes');
const mainRoutes = require('./mainRoutes');

/*
 Composing multiple middleware functions
 into a single request middleware handler
*/

router.use(combine);

router.use('/test-service', mainRoutes);
router.use('/cv', cvRoutes);

module.exports = router;