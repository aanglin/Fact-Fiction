const router = require('express').Router();
const { FakeNews } = require('../../models');

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



