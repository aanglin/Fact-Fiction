const router = require("express").Router();
const User = require("../../models/User");

router.get("/", (req, res) => {
  User.findAll().then((randomData) => {
    res.json(randomData);
  });
});

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
console.log(userData);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { userName: req.body.userName } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.userName = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/signup', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { userName: req.body.userName } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Please type in a username' });
      return;
    }

    const validPassword = (req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Please type in a password' });
      return;
    }

    req.session.save(() => {
      req.session.userName = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});



router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;
