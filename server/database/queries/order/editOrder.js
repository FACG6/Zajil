const connection = require('../../config/dbConnection');

const editOrders = (phone, address, date, placeId, id) => connection.query(
  'UPDATE orders SET s_customer_phone = $1, s_customer_address = $2, fk_i_place_id = $3, dt_modified_date = $4 FROM places WHERE orders.pk_i_id = $5 RETURNING orders.pk_i_id',
  [phone, address, placeId, date, id],
);
module.exports = editOrders;
