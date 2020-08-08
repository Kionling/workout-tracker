const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//Need to update workout by id
router.put("/api/workouts/:id", ( req , res) => {
    Workout.findByIdAndUpdate(req.params.id, {$push: { exercises: req.body} }, {new: true})
    .then(function(dbworkout){
        console.log("get", dbworkout)
        res.send(dbworkout)
    }).catch(function(err){
        if(err)throw err
    })
})



router.post("/api/workouts/bulk", ({ body }, res) => {
  Workout.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", ({ body }, res) => {
    Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });

router.get("/api/workouts", (req, res) => {
  
});

module.exports = router;
