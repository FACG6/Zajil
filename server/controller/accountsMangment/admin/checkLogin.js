const { select } = require('../../../database/queries/admin/checkAdmin');

exports.check = (req, res) => {
  const { userName, password } = req.body;
  console.log(req.body);
  select(userName, password)
    .then((result) => {
      console.log(result);
    });
};
