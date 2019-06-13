const connection = require('../../config/dbConnection');

const editOrders = (phone, address, item, date, placeId, id) => {
  const values1 = [phone, address, placeId, date, id];
  return connection
    .query(
      'UPDATE orders SET s_customer_phone = $1, s_customer_address = $2, fk_i_place_id = $3, dt_modified_date = $4 FROM places WHERE orders.pk_i_id = $5 RETURNING orders.pk_i_id',
      values1,
    )
    .then(() => {
      const values2 = [item, date, id];
      connection
        .query(
          'UPDATE items SET s_name = $1, dt_modified_date = $2 WHERE  fk_i_order_id = $3 RETURNING items.s_name',
          values2,
        )
        .catch(err => ({ error: err.message }));
    })
    .catch(err => ({ error: err.message }));
};
module.exports = editOrders;
