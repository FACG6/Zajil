const connect = require('../../config/dbConnection');

const addcustomer = (customer) => {
  const {
    name, email, phone, status, address,
  } = customer;
  const sql = {
    text: 'INSERT INTO tuser (s_name ,s_mobile_number,s_email,b_status,s_address,i_type,s_image,s_password) values($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',
    values: [name, phone, email, status, address, 2, '', ''],
  };
  return connect.query(sql);
};
module.exports = { addcustomer };
