const { getDetails } = require('../../../database/queries/captain/getCaptainDetails');

exports.getDetails = (req, res) => {
  const { id } = req.params;
  if (!id || !(/^[0-9]+$/.test(id))) {
    res.status(400).send({ error: 'Bad Request' });
  } else {
    getDetails(id)
      .then(({ rowCount, rows }) => {
        if (rowCount) {
          res.send({ result: rows });
        } else {
          res.status(400).send({ error: 'Bad Request' });
        }
      })
      .catch(() => {
        res.status(500).send({ error: 'Internal Server Error' });
      });
  }
};
