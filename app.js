const express = require("express");
const path= require ('path');
const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
const sequelize = require("./util/database");
const Personne = require("./models/Personne");
const Utilisateur = require("./models/Utilisateur");
const Client = require("./models/Client");
const authRoute=require("./routes/Auth")
const proprieteRoute=require("./routes/Propriete")

const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cookieParser());


app.use(express.static(path.join('public'))); 

//Authorization headers
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get('/',(req,res)=>{
  console.log(req.cookies.userLog);
  const user=req.cookies.userLog
    res.render('home',{user})
})



app.use('/auth',authRoute,express.static(path.join(__dirname, 'public')))
app.use('/prop',proprieteRoute,express.static(path.join(__dirname, 'public')))

//Routes



app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
