const router = require('express').Router();
const lawRoutes = require('./lawRoutes'); 
const fakeNewsRoutes = require('./fakeNewsRoutes');

router.use('/laws', lawRoutes);
router.use('/fakenews', fakeNewsRoutes);

module.exports = router;




// const router = require('express').Router();

// const dishRoutes = require('./dish-routes.js');

// router.use('/dish', dishRoutes);

// module.exports = router;