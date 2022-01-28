const express = require("express");
const router=express.Router()
const sequelize = require("../util/database");
const Client = require("../models/Client");
const Personne = require("../models/Personne");
const Logger = require("nodemon/lib/utils/log");

router.get("/register", async (req, res) => {
  res.render("Auth/register");
  
});

router.get("/login", async (req, res) => {
    res.render("Auth/login");
  });
  

router.post("/register", async (req, res) => {
    const t = await sequelize.transaction();
  const { email, password, username } = req.body;
     try {
    const personne = await Personne.create({
        email, password, username 
    },{transaction:t});
    if (personne ) {
      const client = await Client.create({ idPersonne: personne.id },{transaction:t});
      if(client){
          res.cookie('user',{
              id:personne.id,
              username:personne.username
          })
         await t.commit()
         res.render('home')
      }else{
          throw new Error("Ouups")
      }
    }
  } catch (err) {
      await t.rollback();
    res.send({ success: false, err: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password, username } = req.body;
     try {
        const personne=await Personne.findOne({where:{email}})
        console.log(personne.dataValues);
        if(personne){
             res.cookie('userLog',{
                id:personne.id,
                username:personne.username
            })
            res.redirect('/')
        }
    else{
          throw new Error("Ouups")
      }
    }
    catch (err) {
    res.send({ success: false, err: err.message });
  }
});

router.post("/logout", async (req, res) => {
       try {
           console.log("Hoyo");
           res.clearCookie('userLog');
              res.redirect('/')
          }
      catch (err) {
      res.send({ err: err.message });
    }
  });

module.exports = router;
