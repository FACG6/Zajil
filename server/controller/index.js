require('dotenv').config();

const express = require('express');

const { checkAuth } = require('./middleware/authentication');
const { protect } = require('./middleware/protectRoute');
const adminHandler = require('./accountsMangment/admin');

const router = express.Router();

router.use(checkAuth);
// the all routes start from here

router.use(adminHandler);

router.use(protect);
// the protected route start from here

module.exports = router;
