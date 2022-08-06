const router = require('express').Router();
const randomFactsRoutes = require('./randomFactsRoutes'); 


router.use('/randomFacts', randomFactsRoutes);

module.exports = router;




// const router = require('express').Router();

// const dishRoutes = require('./dish-routes.js');

// router.use('/dish', dishRoutes);

// module.exports = router;