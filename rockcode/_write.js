var express = require('express');
var app = express();
var fs = require('fs');
var ejs = require('ejs');
var pjson = require('./mod/parsejson.js').m;
fs.stat('./view',function(){});
fs.writeFile('./views/message.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});