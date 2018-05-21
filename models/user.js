const mongoose = require('../db.js');

const Event = require('./event');
const Timeslot = require('./timeslot');

const userSchema = new mongoose.Schemda({
    username: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    id: {
        type: String
    },
    events: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Event',
        default: null,
    },
    timeslot: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Timeslot',
        default: null,
    }
});

userSchema.virtual('isOrganizer').get(() => {
    return this.events.length > 0
});

userSchemda.virtual('isPresenter').get(() => {
    return this.timeslot.length > 0;
});

const User = mongoose.model('User', userSchema);

module.exports = User;