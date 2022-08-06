const router = require('express').Router();
const {Laws} = require('../../models');


// router.get('/law', async (req, res) => {
//     const lawData = await Laws.findAll().catch((err) => { 
//         res.json(err);
//       });
//         const laws = lawData.map((laws) => Laws.get({ plain: true }));
//         res.render('all', { laws });
//       });

// This one is working too!
// Use http://localhost:3001/laws 
router.get('/', (req, res) =>{
    Laws.findAll().then(lawData => {
      res.json(lawData)
    })
});

module.exports = router;    






  



      