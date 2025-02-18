const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: { type: String, required: true},
    stock: { type: Number, required: true },
    imagesUrl : {
        0 : String,
        1 : String,
        2 : String,
        3 : String,
    }
});

productSchema.index({ name: 1 });

module.exports = mongoose.model('Medicine', productSchema);

