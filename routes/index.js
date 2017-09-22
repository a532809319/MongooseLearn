var express = require('express');
var router = express.Router();
var SomeModel=require('./../shcma/SomeModel');
/* GET home page. */
router.get('/', function(req, res, next) {

   var SomeModelInstance = new  SomeModel({
    // {
    //     type: Number,
    //         min: [6, 'Too few eggs'],
    //     max: 12
    //     required: [true, 'Why no bacon?']
    // }
       eggs:8,
    // {
    //     type: String,
    // enum: ['Coffee', 'Tea', 'Water',]
    // }
       drink:'Coffee'
   })
    console.log(SomeModelInstance,"instancs")
    SomeModelInstance.save(function (err) {
        if (err) console.log(err)
        // saved!
    });

  res.render('index', { title: 'Express' });
});

module.exports = router;
