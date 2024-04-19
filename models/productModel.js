const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    slug:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    brand: {
        type: String,
        //enum: ["Apple","Samsung","Sony","LG","Microsoft","Dell","HP","Lenovo","Asus","Acer","Huawei","Google","Xiaomi"],
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    sold: {
        type:Number,
        default:0,
    },
    images:{
        type:Array,
    },
    color: {
        type: String,
        //enum: ['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Brown', 'Pink'],
        required:true,
    },
    ratings:[{
        star:Number,
        postedby:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    },],

},{
    timestamps:true
});

//Export the model
module.exports = mongoose.model('Product', productSchema);