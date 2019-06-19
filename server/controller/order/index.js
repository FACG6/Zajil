const express = require('express');

const { deleteOrder } = require('./deleteOrder');
const { postOrder } = require('./postOrder');

const router = express.Router();

router.route('/deleteOrder/:id')
  .delete(deleteOrder);

module.exports = router;
