const router = require('express').Router();
const randomFactsRoutes = require('./randomFactsRoutes'); 
const userRoutes = require('./userRoutes');

router.use('/randomFacts', randomFactsRoutes);
router.use('/users', userRoutes);

module.exports = router;




// const router = require('express').Router();

// const dishRoutes = require('./dish-routes.js');

// router.use('/dish', dishRoutes);

// module.exports = router;