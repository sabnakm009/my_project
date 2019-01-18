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
  


var p = new Promise(function(resolve, reject) {
    // do a thing, possibly async, then…
  
    if (1) {
      resolve(result);
    }
    else {
      reject("It broke");
    }
  });

  con.query("select * from log",p.then(function(result){ console.log(result)}
  ,function(err){ console.log(err)}))









  
/*p.then(function(err) {
        console.log(err); // "Stuff worked!"
      }, function(result) {
        console.log(result); // Error: "It broke"
      });*/
