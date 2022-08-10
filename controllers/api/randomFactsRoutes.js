const router = require('express').Router();
const { RandomFacts } = require('../../models');


// router.get('/law', async (req, res) => {
//     const lawData = await Laws.findAll().catch((err) => { 
//         res.json(err);
//       });
//         const laws = lawData.map((laws) => Laws.get({ plain: true }));
//         res.render('all', { laws });
//       });

// This one is working too!
// Use http://localhost:3001/RandomFacts
router.get('/', (req, res) =>{
    RandomFacts.findAll().then(randomData => {
      res.json(randomData)
    })
});

module.exports = router;    






  



      