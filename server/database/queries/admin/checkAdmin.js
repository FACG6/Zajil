const connection = require('../../config/dbConnection');

exports.select = (username, password) => connection.query('select * from users where user_name = $1 and password = $2', [username, password]);
