const router = require("express").Router();

router.get("/", async (req, res) => {
  res.json(`${req.method} ${req.url}`);
});

router.post("/", async (req, res) => {
  res.json(`${req.method} ${req.url}`);
});

router.get("/:id", async (req, res) => {
  res.json(`${req.method} ${req.url}`);
});

router.delete("/:id", async (req, res) => {
  res.json(`${req.method} ${req.url}`);
});

module.exports = router;