const express=require("express");
const ejs=require("ejs");
const bodyParser = require("body-parser");
const app=express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended  : true}));
app.use(express.static("public"));


var adding=[];
app.get("/", function (req,res) {

var today= new Date();
var day=" ";
var currentday=today.getDay();


console.log("the day  is: "+ ":"+today.getDay()+" ");

switch (currentday) {
    case 0:
        day="Sunday";
        break;
        console.log(day);
    case 1:
        day="Monday" ;
        break;
        console.log(day);  
    case 2:
            day="Tuesday";
            break;
            console.log(day);
    case 3:
            day="Wednesday";
            break;
            console.log(day);
    case 4:
            day="Thrusday";
            break;
            console.log(day);
    case 5:
            day="Friday";
            break;
            console.log(day);
    case 6:
            day="Saturday";
            break;
            console.log(day);
   
            
    default:
        break;
}

console.log(day);

res.render("list",{ theday: day, aH: adding  });

//res.sendFile(__dirname+"/index.html");
// res.render("list",{ theday  :day});
 });

 app.post("/",function (req,res) {

 var add=req.body.input;
 adding.push(add);
console.log(adding);

res.redirect("/");

 })


app.listen(5000,function () {
    
console.log("working");

});