var express = require('express');
var router = express.Router();
var path = require('path');

var newArray = [];

router.get('/', function(req, res){
  res.sendFile(path.resolve('public/views/index.html'));
});

//this route is to get items from the server
router.get('/getItems', function(req, res){
  res.send(newArray);
});

//this route is posting items to the server from the inputs
router.post('/sendItems', function(req, res){
  console.log('inside post router:', req.body);
//pushing to new array
  newArray.push(req.body);


});

module.exports = router;
