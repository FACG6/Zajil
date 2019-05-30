const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('First setup');
});

router.get('/viewOrders', (req, res) => {
  console.log('server');
  const orders = JSON.stringify([{
    key: '25', customer: 'أحمد', date: '10-02-1990', captain: 'محمود', status: 'تم', price: '20$',
  }, {
    key: '26', customer: 'سمير', date: '10-02-1990', captain: 'خالد', status: 'قيد التنفيذ', price: '20$',
  }, {
    key: '27', customer: 'علي', date: '10-02-1990', captain: 'سامر', status: 'لم يتم', price: '20$',
  }]);
  res.send(orders);
});

module.exports = router;
