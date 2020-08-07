const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for workouts"
  },
  type: {
    type: String,
    
  },
  weight: {
    type: Number
  },
  reps: {
    type: Number
  },    
  sets: {
    type: Number
  },
  duration:{
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//
//
//
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
