const passport = require("../passport/passport");

const router = require("express").Router();

const db = require("../models");

router.get("/scrape", (req, res) => {
    res.json({ recipe: req.recipe })
})
router.post("/scrape", )
