const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    numOfViews:{
        type:Number,
        default:0,
    },
    isLiked:{
        type:Boolean,
        default:false,
    },
    isDisliked:{
        type:Boolean,
        default:false,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }],
    dislikes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }],
    image:{
        type:String,
        default:"https://www.shutterstock.com/shutterstock/photos/381746308/display_1500/stock-photo-blog-blogging-homepage-social-media-network-concept-381746308.jpg",
    },
    author:{
        type:String,
        default:"Admin",
    },
},
{
    toJSON:{
        virtuals:true,
    },
    toObject:{
        virtuals:true,
    },
    timestamps:true,
});

//Export the model
module.exports = mongoose.model('Blog', blogSchema);