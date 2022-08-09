const router = require("express").Router();
const { ResultsPage } = require("../../models/");
const withAuth = require("../../utils/auth");

//is this route supposed to print score to DB?
router.post("/", withAuth,(req, res) => {
    ResultsPage.create({
        userName: req.body.userName,
        score: req.body.score
    })
    .then((data) => {
        res.json(data);
    })
    .catch((err) =>{
        res.json(err);
    })
})

//Is this route supposed to get all records of high scores or just the current user's high scores?
router.get("/", withAuth, (req, res) => {
    ResultsPage.findAll().then(data => {
        res.json(data)
    });
});

module.exports = router;