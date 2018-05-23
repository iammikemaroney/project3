const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

// Matches with "/api/recipes"
router.route("/")
  .get(recipeController.findAll)
  .post(recipeController.create);

module.exports = router;