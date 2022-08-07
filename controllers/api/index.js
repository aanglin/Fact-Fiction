const router = require('express').Router();
const randomFactsRoutes = require('./randomFactsRoutes'); 
const userRoutes = require('./userRoutes');
const resultsRoutes = require('./resultsRoutes');

router.use('/randomFacts', randomFactsRoutes);
router.use('/users', userRoutes);
router.use('/results', resultsRoutes);
module.exports = router;




// const router = require('express').Router();

// const dishRoutes = require('./dish-routes.js');

// router.use('/dish', dishRoutes);

// module.exports = router;