const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    product:{ type: Schema.Types.ObjectId, ref: 'Product', required: true },
    totalPrice: {
        price:{Number,required:true},
        delivery :{Number,required:true},
    },
    stock: { type: Number, required: true },
    role: { type: String, enum: ['admin','customer'], required: true },
    location: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: {type:String,enum: ['pending','withDelivery','done'], required:true},
    imagesUrl : {
        0 : String,
        1 : String,
        2 : String,
        3 : String,
    },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
