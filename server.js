var express = require('express');
var app = express();
var server = app.listen(1001, encender);

function encender() {
  console.log('Estas en linkedln ...');
}
app.use(express.static('public'));