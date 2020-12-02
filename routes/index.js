var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
/* GET home page. */
router.get("/vue-project2", function (req, res, next) {
  res.render("vue-project2");
});
router.get("/vue-project1", function (req, res, next) {
  res.render("vue-project1");
});

module.exports = router;
