const { getDetails } = require('../../../database/queries/captain/getCaptainDetails');

exports.getDetails = (req, res) => {
  const { id } = req.params;
  getDetails(id)
    .then(({ rows }) => {
      res.send({ result: rows });
    })
    .catch(() => {
      res.status(500).send({ error: 'Internal Server Error' });
    });
};
