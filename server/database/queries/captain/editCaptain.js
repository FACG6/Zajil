const connection = require('../../config/dbConnection');

const editCaptain = (captainInfo, id) => {
  const {
    name, email, phone, address, IDNumber, licenceNumber, status, newName, pass,
  } = captainInfo;
  if (!pass) {
    return connection.query('UPDATE TUser SET s_name = $1, s_email = $2, s_mobile_number = $3, s_address = $4, s_id_number = $5, s_driver_licence_number = $6, b_status = $7, s_image = $8 WHERE pk_i_id = $9 RETURNING *', [name, email, phone, address, IDNumber, licenceNumber, status, newName, id]);
  }
  return connection.query('UPDATE TUser SET s_name = $1, s_email = $2, s_mobile_number = $3, s_address = $4, s_id_number = $5, s_driver_licence_number = $6, b_status = $7, s_image = $8, s_password = $9  WHERE pk_i_id = $10 RETURNING *', [name, email, phone, address, IDNumber, licenceNumber, status, newName, pass, id]);
};

module.exports = { editCaptain };
