const router = require("express").Router();
const Transaction = require("../models/workout.js");
const path = require("path");

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})


module.exports = router