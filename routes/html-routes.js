const router = require("express").Router();
const Transaction = require("../models/workout.js");

router.get("/exercise", (req, res) => {
    res.sendFile(__dirname, "../public/exercise.html")
})


module.exports = router