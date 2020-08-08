const router = require("express").Router();
// const Workout = require("../models/workout.js");
const Exercise = require("../models/workoutTwo.js");

router.post("/api/workouts", ({ body }, res) => {
  Exercise.create(body)
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//Need to update workout by id
router.put("/api/workouts/:id", ( req, res) => {
    Exercise.findByIdAndUpdate(req.params.id, {$push: { exercises: req.body} }, {new: true})
    .then(function(dbExercise){
        console.log("get", dbExercise)
        res.send(dbExercise)
    }).catch(function(err){
        if(err)throw err
    })
})



router.post("/api/workouts/bulk", ({ body }, res) => {
  Exercise.insertMany(body)
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", ({ body }, res) => {
    Exercise.find({})
    .sort({ date: -1 })
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });

router.get("/api/workouts", ({body}, res) => {
    Exercise.find({})
    .sort({date: -1})
    .then(dbExercise =>{
        res.json(dbExercise);
    })
    .catch(err =>{
        res.status(400).json(err); 
    })
})


// router.get("/api/workouts/:id", (req, res) => {
//     Exercise.find({id: req.params.id})
//     .then({dbExercise}); 
// }).catch(err => {
//     res.status(400).json(err)
// })












module.exports = router;
