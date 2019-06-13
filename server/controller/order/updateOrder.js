const updateOrdersQuery = require('../../database/queries/order/editOrder');

exports.updateOrder = (req, res) => {
  const {
    phone, address, item, date, storeID,
  } = req.body.orderObj;
  updateOrdersQuery(phone, address, item, date, storeID, req.params.id).then(
    (response) => {
      if (response.error) {
        res.status(500).send('Internal server error');
      } else {
        res.status(200).send('updated successfully');
      }
    },
  );
};
