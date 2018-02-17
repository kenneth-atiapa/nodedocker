var express = require('express');


var app = express();

app.get("/", function(req,res,next){

    res.send("Hello world");

});


app.listen(2000,()=>

{
    console.log("listening on port 2000");
})