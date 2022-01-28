const express = require("express");
const router=express.Router()
const sequelize = require("../util/database");
const Propriete = require("../models/Proprietes");
const Logger = require("nodemon/lib/utils/log");

router.get("/", async (req, res) => {
   const id=req.query.id;
   const propriete=await Propriete.findOne({where:{id}})
  res.render("propriete/index",{prop:{...propriete.dataValues}});
});


router.delete('/',(req,res)=>{
        console.log(req.query);
})

router.get("/ajout", async (req, res) => {
    res.render("propriete/ajout",{});
    
  });
  
  router.post("/ajout", async (req, res) => {
    const attributes=req.body;
    try{
            await Propriete.create({...attributes})
    }catch{
        res.send("<h1 style='color:red'>Error</h1>")
    }
    
  });


module.exports = router;
