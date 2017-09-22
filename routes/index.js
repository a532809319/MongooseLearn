var express = require('express');
var router = express.Router();
var SomeModel=require('./../shcma/SomeModel');
var jisuang=require('./../method')
/* GET home page. */
router.get('/', function(req, res, next) {

   var SomeModelInstance = new  SomeModel({
    // {
    //     type: Number,
    //         min: [6, 'Too few eggs'],
    //     max: 12
    //     required: [true, 'Why no bacon?']
    // }
       eggs:2,
    // {
    //     type: String,
    // enum: ['Coffee', 'Tea', 'Water',]
    // }
       drink:'Coffee',
       name :'a'
   })
    // console.log(SomeModelInstance,"instancs")
    // SomeModelInstance.save(function (err) {
    //     if (err) console.log(err)
    //     // saved!
    // });
   // var query= SomeModel.find({name:'a'});
   // query.limit(50).sort({"eggs":1}).where('eggs').lt(8);
   // query.exec(function (err,doc) {
   //      // console.log(typeof doc,"doc")
   //     //  var doc=[{a:2,b:3},{a:2,b:3}]
   //
   //     var i=1
   //     var arry=[]
   //
   //      var i=1
   //     for(item of doc){
   //        // var item= JSON.parse(JSON.toString(item))
   //
   //          item._doc['ajax']=i;
   //          i++;
   //
   //
   //
   //     }
   //     console.log(doc)
       // console.log(doc)
      // console.log('345',arry,"arr=====")
     var abc = jisuang.arear(5)
       res.render('index',{title:abc})

   })


});

module.exports = router;
