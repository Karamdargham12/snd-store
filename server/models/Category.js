const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    name: {type:String , required:true},
    sub :{type:String}
})

module.exports = mongoose.model('Category', categorySchema);