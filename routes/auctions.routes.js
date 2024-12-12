const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("auctions", { title: "Auctions" });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.render("item-details", { title: "Item Details", itemId: id });
});

module.exports = router;