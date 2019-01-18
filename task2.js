const express=require('express')
const app=express();
app.use(express.json())
const mysql = require('mysql');
const promise = require('promise')

var con = mysql.createConnection({
  host: "192.168.0.84",
  user: "Sabna",
  password: "Sabna@123",
  database: "mydb"
});

let fruits  = ["orange", "mango", "apple","banana","grapes"];
let cars  = ["bmw", "audi", "maruthi","i10","i20"];
let vegetables  = ["chilli", "onion", "brinjal"];
let flowers  = ["dalia", "jasmine", "rose","lotus"];

var requestTime = function (req, res, next) {
   var d = new Date(); 
   var hr= d.getHours(); 
   var m=d.getMinutes(); 
   var s= d.getSeconds();
   req.requestTime = hr+":"+m+":"+s;
    next()
  }
  
app.use(requestTime)
app.use(function (req, res, next) {
    console.log('request Time:',req.requestTime)
    console.log('Request Type:', req.method) 
    console.log('Request url:',req.headers.host+""+req.originalUrl) 
    console.log('Request ip', req.ip) 
    console.log('request body',req.body.name)
    var url =req.headers.host+""+req.originalUrl;
  
    
      const myPromise = new Promise(function(resolve, reject) {
        //resolve(42);
      });
      /*
    con.query("SELECT * FROM log",myPromise.then(function(value){
      console.log('Got a value!', value);
      //throw new Error('Error on the main thread');
    })
    .catch(function(err) {
      console.log('Caught the error ');
      console.log(err);
    }))*/
    con.query( 'SELECT * FROM log'
    ,myPromise.then( rows => {
      con.query( 'SELECT * FROM customers' ) 
    }));
    
    next()
  })



  
app.get('/fruits', function (req, res,next) {
    res.send(fruits) 
  })
app.post('/fruitsadd', function (req, res,next) {   
    const name = req.body.name;
    fruits.push(name);
    res.send(fruits)
    })
app.get('/vegetables', function (req, res,next) {
res.send(vegetables)
})
app.get('/cars', function (req, res,next) {
    console.log("in cars")
res.send(cars)
})
app.get('/flowers', function (req, res,next) {
    console.log("in flowers")
res.send(flowers)
})

app.listen(8002,function()
{
  console.log("server started")
})










///  con.connect(function(err) {
  ///    if (err) throw err;

  /*
  var sql  = {request_time: req.requestTime, request_type: req.method, request_url: url, request_ip:req.ip,request_body:req.body.name };
    con.query('INSERT INTO log SET ?', sql, function(err, result) {
      if (err) throw err;
      console.log("1 record inserted");
     /*con.query("DELETE  FROM log", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
     });
      });*/

/*
    con.query("SELECT * FROM log", function (err, result, fields) {
      if (err) throw err;
        //console.log(result);
         console.log(JSON.stringify(result))
          });*/

  /*var sql1 = "CREATE TABLE log (request_time VARCHAR(255), request_type VARCHAR(255),request_url VARCHAR(255),request_ip VARCHAR(255),request_body VARCHAR(255))"
        con.query(sql1, function (err, result) {
        if (err) throw err;
        console.log("Table created");*/