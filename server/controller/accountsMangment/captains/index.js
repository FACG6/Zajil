const express = require('express');

const { getDetails } = require('./getCaptainDetails');

const router = express.Router();

router.route('/getCaptainDetails/:id')
  .get(getDetails);

module.exports = router;
