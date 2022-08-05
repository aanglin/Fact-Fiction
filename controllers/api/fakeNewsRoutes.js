const router = require('express').Router();
const { FakesNews } = require('../../models');

// This route uses async/await with '.catch()' for errors
// and no HTTP status codes
router.get('/', async (req, res) => {
  const fakeNewsData = await FakeNews.findAll().catch((err) => {
    res.json(err);
  });
  const fakeNews = fakeNewsData.map((fakeNews) => fakeNews.get({ plain: true }));
      res.render('all', { fakeNews });
});


// //create fakenews entry
// router.post('/', async (req, res) => {
//   try { 
//     const fakeNewsData = await FakeNews.create({
//     title: req.body.title,
//     label: req.body.label,
//   });
  
//   res.status(200).json(fakeNewsData)
// } catch (err) {
//   res.status(400).json(err);
// }
// });



module.exports = router;



