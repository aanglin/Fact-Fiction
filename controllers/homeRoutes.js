const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

// Route to get login html handlebars
router.get("/login", async (req, res) => {
  console.log('Login Page')
  res.render("login");
});

router.get("/gamePage", async (req, res) => {
  console.log('Game Page')
  res.render("gamePage");
});

// router.get("/", (req, res) => {
router.get("/", async (req, res) => {
  const userData = await User.findAll().catch((err) => {
    res.json(err);
  });
  const users = userData.map((users) => users.get({ plain: true }));
  res.render("all", users);
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

router.post("/login", async (req, res) => {
  try {
    // we search the DB for a user with the provided email
    const userData = await User.findOne({
      where: { userName: req.body.userName },
    });
    if (!userData) {
      // the error message shouldn't specify if the login failed because of wrong email or password
      res.status(404).json({ message: "Login failed. Please try again!" });
      return;
    }
    // use `bcrypt.compare()` to compare the provided password and the hashed password
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    // if they do not match, return error message
    if (!validPassword) {
      res.status(400).json({ message: "Login failed. Please try again!" });
      return;
    }
    // if they do match, return success message
    res.status(200).json({ message: "You are now logged in!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    const user = userData.get({ plain: true });
    res.render("user", user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
