'use strict';

var express = require('express');
var app = express();

app.use(express.static('./dist'));

console.log('\nServer is running on => 0.0.0.0:8000\n');

app.listen(8000, '0.0.0.0');
