  
const mongoose = require("mongoose");


const Schema = mongoose.Schema;


const exerciseSchema = new Schema ({
    date: {
        type: Date,
        default:Date.now
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
        se4t: {
          type:Number
        },
        reps: {
          type: Number
        }
      }
      ]

})

const Exercise = mongoose.model("exercise", exerciseSchema)

module.exports = Exercise   

