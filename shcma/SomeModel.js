var mongoose = require('mongoose');
// Define schema
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

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

        type: String,
        unique:[true,'alll ext']




        }
});
// SomeModelSchema.plugin(uniqueValidator,function (err) {
//     console.log('-------------',err)
//     console.log(11111111)
//
// });



// Compile model from schema
var SomeModel = mongoose.model('aomeModel', SomeModelSchema );
module.exports=SomeModel