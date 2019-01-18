const express=require('express')

const app=express();
//app.use(express.json())


const bodyParser = require('body-parser');

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(express.json())

let fruits  = ["orange", "mango", "apple","banana"];

//display
app.get('/fruits', function (req, res,next) {
  res.send(fruits)
  next()
})


//add
app.post('/fruitsadd', function (req, res,next) {

  const name = req.body.name;
  console.log(name)
  /*for(let i =0;i<=fruits.length-1;i++)
  {
   /* if(fruits[i]==newfruit)
    {
    console.log(fruits[i])
      res.send("fruit is already exist")
    }
    else*/
    
      //console.log(fruits[i])
      fruits.push(name);
      res.send(fruits.toString())
    
 //}
  next()
})


//replace
app.patch('/fruitsedit',function(req,res,next)
{
 // const paraname=req.params.name;
 const name = req.body.name;
 const name1 = req.body.name1;
  console.log(name)
  for(let i =0;i<=fruits.length-1;i++)
  {
    if(fruits[i]===name)
     fruits[i] = name1;
     //fruits.splice(i,1,name1);
  }
  res.send("updated fruits are "+fruits)
  next()
})

//delete
app.delete('/fruitsdel', function (req, res,next) {
  let name = req.body.name;
  for(var i = fruits.length - 1; i >= 0; i--)
  {
    if(fruits[i] === name)
      fruits.splice(i, 1);
  }
  res.send(fruits);
})

app.listen(7425,function()
{
  console.log("server started")
})