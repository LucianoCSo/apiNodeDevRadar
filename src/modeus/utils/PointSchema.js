const mongoos = require('mongoose');

const PonitSchema = new mongoos.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    }
});

module.exports = PonitSchema;