const express = require('express');
// const { deleteOrder } = require('./deleteOrder');
const { updateOrder } = require('./updateOrder');
const { getOrders } = require('../order/getOrders');

const router = express.Router();

router.route('/deleteOrder/:id');
// .delete(deleteOrder);

router.get('/viewOrders', getOrders);
// router.put('/editOrder/:id', updateOrder);

module.exports = router;
