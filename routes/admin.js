const express = require("express");

const router = express.Router();

router.get("/addProduct", (req, res) => {
  res.send("admin page");
});

module.exports = router;
