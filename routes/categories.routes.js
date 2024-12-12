const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("categories", { title: "Categories" });
});

module.exports = router;