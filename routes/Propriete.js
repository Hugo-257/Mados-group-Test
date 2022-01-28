const express = require("express");
const router=express.Router()
const sequelize = require("../util/database");
const Client = require("../models/Client");
const Personne = require("../models/Personne");
const Logger = require("nodemon/lib/utils/log");

router.get("/", async (req, res) => {
  res.render("propriete/index",{});
});

router.get("/ajout", async (req, res) => {
    res.render("propriete/ajout",{});
    
  });
  
  router.post("/ajout", async (req, res) => {
    console.log(req.body);
    
  });

module.exports = router;
