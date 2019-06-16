const connection = require('../../config/dbConnection');

exports.selectCaptainsNames = () => connection.query('SELECT pk_i_id, s_name FROM TUser WHERE i_type = 1');
