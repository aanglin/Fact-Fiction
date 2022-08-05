const router = require('express').Router();
const lawRoutes = ('./lawRoutes'); 

router.use('./laws', lawRoutes);

module.export = router;