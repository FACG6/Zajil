
const connection = require('../../config/dbConnection');

const insertCaptain = (captainInfo) => {
  console.log(captainInfo, 'jjjjjjjjj');
  const queryValues = Object.values(captainInfo);
  const sql = {
    text: 'INSERT INTO Tuser( s_name,  s_email,  s_mobile_number,s_address,s_id_number, s_driver_licence_number, b_status, s_image) values ($1, $2, $3, $4, $5, $6, $7,$8) RETURNING *',
    values: [...queryValues],
  };
  return connection.query(sql);
};
module.exports = { insertCaptain };
