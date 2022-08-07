const router = require("express").Router();
const { ResultsPage } = require("../../models/");

router.post("/", (req, res) => {
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

router.get("/", (req, res) => {
    ResultsPage.findAll().then(data => {
        res.json(data)
    });
});

module.exports = router;