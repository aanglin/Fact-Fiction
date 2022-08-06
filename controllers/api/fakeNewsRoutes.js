const router = require('express').Router();
const { FakeNews } = require('../../models');

// This route uses async/await with '.catch()' for errors
// and no HTTP status codes
// router.get('/', async (req, res) => {
//   const fakeNewsData = await FakeNews.findAll()

//.catch((err) => {
//     res.json(err);
//   });
//   console.log(fakeNewsData)
  // const fakeNews = fakeNewsData.map((fakeNews) => FakeNews.get({ plain: true }));
  //     res.render('all', { fakeNews });
// });


//Promise route IT WORKS!!!
//test get route localhost3001/fakenews
router.get('/', (req,res) => {
  FakeNews.findAll({
    attributes: [
      'id', 
      'title',
      'label'
    ]
  }).then(fakeNewsData => res.json(fakeNewsData))
})





module.exports = router;



