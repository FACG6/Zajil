const connection = require('../../config/dbConnection');

exports.select = username => connection.query('select * from users where user_name = $1', [username]);
