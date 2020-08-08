  
const mongoose = require("mongoose");


const Schema = mongoose.Schema;


const exerciseSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [ 
        {
        name: {
          type:String,
          trim: true
        }, 
        type: {
          type: String,
          trim: true
        },
        distance: {
            type:Number
        },
        weight: {
          type: Number
        },
        duration: {
          type: Number
        },
        set: {
          type: Number
        },
        reps: {
          type: Number
        }
      }
      ],
      totalDuration: {
          type: Number
      }

})

const Exercise = mongoose.model("exercise", exerciseSchema)

module.exports = Exercise   

