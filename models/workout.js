const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
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

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
