const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const wodSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true
            },
            name: {
                type: String,
                trim: true
            },
            duration: {
                type: Number
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
            distance: {
                type: Number
            }
        }
    ]
}, {
    toJSON: {
        virtuals: true
    }
});

wodSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration
    }, 0)
});

const WOD = mongoose.model('wod', wodSchema);
module.exports = WOD;