// const getOrdersQuery = require('../../database/queries/order/getOrders');

// / just a fake data file for testing


exports.getOrders = (req, res) => {
  let orders = [];

  orders = JSON.stringify([
    {
      key: '4',
      customer: 'أحمد',
      phone: 56432145,
      date: Date.now(),
      captain: 'محمود',
      b_status: true,
      address: 'غزة-الرمال',
      storeId: '3',
      items: [{ name: 'خوخ', price: '10' }, { name: 'بطيخ', price: '50' }, { name: 'شمام', price: '40' }],
    },
    {
      key: '1',
      customer: 'سمير',
      phone: 56432146565,
      date: '10/04/2019',
      captain: 'خالد',
      b_status: 'قيد التنفيذ',
    },
    {
      key: '27',
      customer: 'علي',
      date: '10-05-2018',
      captain: 'سامر',
      b_status: false,
      price: '20$',
    },
    {
      key: '23215',
      customer: 'أحمد',
      date: Date.now(),
      captain: 'محمود',
      b_status: true,
      price: '20$',
    },
    {
      key: '210',
      customer: 'سمير',
      date: '10/04/2019',
      captain: 'خالد',
      b_status: 'قيد التنفيذ',
      price: '20$',
    },
    {
      key: '275',
      customer: 'علي',
      date: '10-05-2018',
      captain: 'سامر',
      b_status: false,
      price: '20$',
    },
    {
      key: '2565',
      customer: 'أحمد',
      date: Date.now(),
      captain: 'محمود',
      b_status: true,
      price: '20$',
    },
    {
      key: '2678',
      customer: 'سمير',
      date: '10/04/2019',
      captain: 'خالد',
      b_status: 'قيد التنفيذ',
      price: '20$',
    },
    {
      key: '277896',
      customer: 'علي',
      date: '10-05-2018',
      captain: 'سامر',
      b_status: false,
      price: '20$',
    },
    {
      key: '25132',
      customer: 'أحمد',
      date: Date.now(),
      captain: 'محمود',
      b_status: true,
      price: '20$',
    },
    {
      key: '268651',
      customer: 'سمير',
      date: '10/04/2019',
      captain: 'خالد',
      b_status: 'قيد التنفيذ',
      price: '20$',
    },
    {
      key: '271654',
      customer: 'علي',
      date: '10-05-2018',
      captain: 'سامر',
      b_status: false,
      price: '20$',
    },
  ]);
  res.status(200).send(orders);
};
