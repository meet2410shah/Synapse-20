// Express Router Setup
const router = require(`express`).Router();

// Controller Setup
const { render, create } = require(`../controller/user`);

// Express Router Definition
router.get(`/`, render);
router.get("/:type", (req, res) => {
  res.set("Cache-Control", "no-cache, no-store, must-revalidate");
  if (req.params.type == "synapse100pass") {
    res.render(`register-${req.params.type}`);
  } else if (req.params.type == "battledrone") {
    res.render(`register-${req.params.type}`);
  } else if (req.params.type == "djwars") {
    res.render(`register-${req.params.type}`);
  } else if (req.params.type == "group-events") {
    res.render(`register-${req.params.type}`);
  } else {
    res.redirect("/register");
  }
});
router.post(`/:type`, create);

module.exports = router;
