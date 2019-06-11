const connection = require('../../config/dbConnection');

exports.chackcapten = (pk_i_id, type) => connection.query('SELECT pk_i_id from Tuser where type=1 && pk_i_id=$1');
exports.addItem = (sname, orderId, dtModifiedDate) => connection.query(
  'INSERT INTO items(s_name, fk_i_order_id, dt_modified_date)values($1,$2,$3) RETURNING *',
  [sname, orderId, dtModifiedDate],
);

exports.addOrder = (placeId, customerAddress, customerPhone) => connection.query(
  'INSERT INTO orders(fk_i_place_id, s_customer_address, s_customer_phone)values($1,$2,$3) RETURNING *',
  [placeId, customerAddress, customerPhone],
);
