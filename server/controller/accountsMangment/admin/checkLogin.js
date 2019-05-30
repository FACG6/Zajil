const { compareSync } = require('bcryptjs');
const { sign } = require('jsonwebtoken');

const { select } = require('../../../database/queries/admin/checkAdmin');

exports.check = (req, res) => {
  const { userName, password } = req.body;

  if (!(userName && password)) {
    return res.status(400).send({ error: 'Bad Request' });
  }

  select(userName)
    .then(({ rowCount, rows }) => {
      if (!rowCount) {
        res.status(401).send({ error: 'اسم المستخدم او كلمة السر خاطئة' });
      } else {
        const response = compareSync(password, rows[0].password);
        if (response) {
          const { id, role, user_name } = rows[0];

          const payload = sign({ id, role, user_name }, process.env.SECRET);

          res.cookie('jwt', payload, { httpOnly: true, maxAge: 60 * 60 * 24 * 7 });

          res.status(200).send({ result: true });
        } else {
          res.status(401).send({ error: 'اسم المستخدم او كلمة السر خاطئة' });
        }
      }
    })
    .catch(() => {
      res.status(500).send({ error: 'Internal Server Error' });
    });
};
