// Express App Setup
const express = require(`express`);
const router = express.Router();

// Controller Setup
const { render, payment, success } = require(`../controller/payment`);

// Router Definition
router.get(`/`, render);
router.post(`/`, payment);
router.post(`/success`, success);

module.exports = router;
