
const mysql = require('mysql');

var con = mysql.createConnection({
  host: "192.168.0.84",
  user: "Sabna",
  password: "Sabna@123",
  database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
   /* con.query("CREATE DATABASE mydb", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });*/
    var sql1 = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql1, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });
  
/*
  con.connect(function(err) {
    if (err) throw err;
    /*var sql = "INSERT INTO customers (name, address) VALUES ('systalent', 'infopark ')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    con.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        //console.log(result);
        console.log(JSON.stringify(result))
      });
     /* con.query("update customers set name ='systalent' where name = 'Company Inc'", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });*/
    /*con.query("delete from  customers where name ='systalent'", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });*/


 // });
