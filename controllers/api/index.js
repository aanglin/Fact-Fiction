const router = require('express').Router();
const lawRoutes = require('./lawRoutes'); 

router.use('/law', lawRoutes);

module.exports = router;




// const router = require('express').Router();

// const dishRoutes = require('./dish-routes.js');

// router.use('/dish', dishRoutes);

// module.exports = router;