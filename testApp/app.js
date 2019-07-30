var express = require('express');

var app = express();
/*
app.get("/",(req,res)=>{
    res.send("koi mujhe junglee kahe");
})
*/

app.get("/movies/:id/:xyz",(req,res)=>{
    res.send("koi mujhe junglee kahe");
})


app.listen(3000,()=>{
    console.log('server running on 3000')
});
