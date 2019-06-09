const connection = require('../../config/dbConnection');

const editCaptain = (captainInfo, id) => {
  const queryValues = Object.keys(captainInfo).map(info => captainInfo[info]);
  const sql = {
    text: 'UPDATE TUser SET s_name = $1, s_email = $2, s_mobile_number = $3, s_address = $4, s_id_number = $5, s_driver_licence_number = $6, b_status = $7, s_image = $8, s_password = $9 WHERE id = $10 RETURNING *',
    values: [...queryValues, id],
  };
  return connection.query(sql);
};

module.exports = { editCaptain };
