const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value.']
    }
}, {
    timestamps: true //Automatically add createdAt and updatedAt fields.
})

module.exports = mongoose.model('Goal', goalSchema);