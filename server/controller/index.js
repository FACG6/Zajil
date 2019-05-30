require('dotenv').config();

const express = require('express');

const { check } = require('./middleware/authentication');
const { protect } = require('./middleware/protectRoute');

const router = express.Router();

router.use(check);
// the all routes start from here

router.get('/', (req, res) => {
  res.send('First setup');
});

router.use(protect);
// the protected route start from here

module.exports = router;
