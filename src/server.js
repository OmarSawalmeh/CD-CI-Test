'use strict';

const express = require("express");
const app = express();
const stamper = require('../middlewares/stamper');
const notFountHandller = require('../handllersError/404');
const error500 = require('../handllersError/500');

app.get("/", (req, res)=>{
    res.send("hello ");
});

app.get("/data", (req, res)=>{
    res.json({
        id: 1,
        name: 'Karam',
        email: 'karam.10@gmail.com'
    });
});

app.get("/test", stamper, (req, res)=>{
    res.json({
        id: 10,
        name: 'TEST',
        email: 'TEST.10@gmail.com',
        time: req.timeStamp
    });
});

// Example For Error500 .....
app.get("/bad", (req, res)=>{
    let num = 10;
    let result = num.forEach((value)=>{
        console.log(value);
    });
    res.send(result);
})

// Handlle Error404 .....
app.use('*', notFountHandller);
// Handlle Error500 .....
app.use(error500);

function start(port){
    app.listen(port, ()=>{
        console.log("Server On Port " + port);
    });
}

module.exports={
    app: app,
    start: start
}