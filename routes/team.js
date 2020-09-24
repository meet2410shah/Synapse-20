// Express Router Setup
const router = require(`express`).Router();

// Controller Setup
const { render } = require(`../controller/team`);

// Express Router
router.get(`/`, render);

module.exports = router;
