const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res) => {
  res.send("admin page");
});

module.exports = router;
