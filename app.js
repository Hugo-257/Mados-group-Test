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
const Propriete=require('./models/Proprietes')
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

app.get('/',async (req,res)=>{
  console.log(req.cookies.userLog);
  const proprietes=await Propriete.findAll()
  const user=req.cookies.userLog
    res.render('home',{user,proprietes})
})

app.get('/update',async (req,res)=>{
  console.log(req.cookies.userLog);
  const propriete=await Propriete.findOne({where:{id:req.query.id}})
  console.log(propriete);
  res.render('propriete/update',{prop:propriete})
})



app.use('/auth',authRoute,express.static(path.join(__dirname, 'public')))
app.use('/prop',proprieteRoute,express.static(path.join(__dirname, 'public')))

//Routes



app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
