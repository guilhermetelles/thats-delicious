const express = require("express");
const router = express.Router();
const storeController = require('../controllers/storeController');

router.get("/", storeController.homePage);

router.get("/reverse/:name/:lastname", (req, res) => {
  // res.json({ name: "Gui", cool_lvl: "1000000000" });

  const reversedName = [...req.params.name].reverse().join("");
  const reversedLastName = [...req.params.lastname].reverse().join("");
  res.send(`${reversedLastName} ${reversedName}`);
});

module.exports = router;
