var express = require('express');
var app = express();

app.set('view engine', 'ejs');



// using seperate route modules 
var Index = require('./routes/Index.js');

app.use('/',Index);

app.listen(8080,function(){
     console.log('listening on port 8080')
});
