var mongoose = require('mongoose');
// Define schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    eggs: {
        type: Number,
        min: [6, 'Too few eggs'],
        max: 12,
        required: [true, 'Why no bacon?']
    },
    drink: {
        type: String,
        enum: ['Coffee', 'Tea', 'Water',]
    },
    name:{
        type:{
            type:String,
            unique:[true,"用户存在"],
            required:true
        }

    }
});

// Compile model from schema
var SomeModel = mongoose.model('aomeModel', SomeModelSchema );
module.exports=SomeModel