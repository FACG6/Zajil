const express = require('express');

const { deleteOrder } = require('./deleteOrder');
const { postOrder } = require('./postOrder');

const router = express.Router();

router.route('/deleteOrder/:id')
  .delete(deleteOrder);
router.route('/addOrder')
  .post(postOrder);

module.exports = router;
