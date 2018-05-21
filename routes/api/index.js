const router = require("express").Router();
const postRoutes = require("./post");
const recipeRoutes = require("./recipes")

// Book routes
router.use("/post", postRoutes);
router.use("/recipes", recipeRoutes);

module.exports = router;
