const mongoose = require('../db.js');

const User = require('./user.js')
const Event = require('./event.js')

const timeslotSchema = new timeslotSchema({
    presenter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    multimedia: {
        // TODO: PPT presentation
        default: null
    },
    length: {
        type: Number,
        required: true,
    }
})

const Timeslot = mongoose.model('Timeslot', timeslotSchema);

module.exports = Timeslot;