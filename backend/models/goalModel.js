const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, //Reference to the User model.
        required: true,
        ref: 'User' 
    },    
    text: {
        type: String,
        required: [true, 'Please add a text value.']
    }
},
{
    timestamps: true //Automatically add createdAt and updatedAt fields.
})

module.exports = mongoose.model('Goal', goalSchema);