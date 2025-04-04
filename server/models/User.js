const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name : { type: String , required:true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin','customer'], required: true },
    location: { type: String, required: true },
    phone: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
