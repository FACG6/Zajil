require('dotenv').config();

const express = require('express');

const { checkAuth } = require('./middleware/authentication');
const { protectRoutes } = require('./middleware/protectRoute');
const adminHandler = require('./accountsMangment/admin');

const router = express.Router();

router.use(checkAuth);
// the all routes start from here

router.use(adminHandler);

router.use(protectRoutes);
// the protected route start from here

module.exports = router;
