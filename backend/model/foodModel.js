const  mongoose  = require("mongoose");

const foodSchema = new mongoose.Schema({
    title : {
        type:String,
        required: true,
        
    },
    description : {
        type: String,
        required: true,
        
    },
    category : {
        type: String,
        required: true,
    },
    trending:{
        type: Boolean,
        required : true,
    },
    coverImage:{
        type: String,
        required: true,
    },
    oldPrice : {
        type: Number,
    },
    newPrice : {
        type: Number,
    },
    createdAt : {
        type: Date,
        default: Date.now,
    }
});

const FoodModel = mongoose.model("food",foodSchema);

module.exports = FoodModel;