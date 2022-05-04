const router = require("express").Router();

router.post("/", async (req, res) => {
  res.json(`${req.method} ${req.url}`);
});

router.delete("/:id", async (req, res) => {
  res.json(`${req.method} ${req.url}`);
});

module.exports = router;