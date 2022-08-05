const router = require('express').Router();
//   const { Model } = require('sequelize/types');
const {Laws} = require('../../models');


router.get('/', async (req, res) => {
    const lawData = await Laws.findAll().catch((err) => { 
        res.json(err);
      });
        const law = lawData.map((laws) => Laws.get({ plain: true }));
        res.render('all', { law });
      });
    
      module.exports = router;    






  



      