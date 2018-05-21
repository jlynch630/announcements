const mongoose = require('../db.js');

const User = require('./user')
const Timeslot = require('./timeslot')

const eventSchema = new eventSchema({
    organizers: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        required: true
    },
    timeslots: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Timeslot',
    }
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;