const router = require("express").Router();
const phonesJson = require("../data/phones.json");

router.get("/", (req, res, next) => {
  req.json(phonesJson);
});

module.exports = router;
