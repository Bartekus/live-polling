var express = require('express');
var app = express();

app.use(express.static('./public')); //Static files hosting
app.use(express.static('./node_modules/bootstrap/dist')); //Static files hosting for bootstrap

app.listen(3000);
console.log("Polling server is running at 'http://localhost:3000'");