const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: {
        type: String,
        required: true,
        unique: true
    }
});

var User = mongoose.model('user', userSchema);

module.exports = { User };