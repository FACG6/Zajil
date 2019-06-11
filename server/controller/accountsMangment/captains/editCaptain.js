const { editCaptain } = require('../../../database/queries/captain/editCaptain');

exports.updateCaptain = (req, res) => {
  const {
    name,
    email,
    phone,
    address,
    IDNumber,
    licenceNumber,
    status,
    avatar,
    password,
  } = req.body;

  const captainInfo = {
    name,
    email,
    phone,
    address,
    IDNumber,
    licenceNumber,
    status,
    avatar,
    password,
  };

  const { id } = req.params;
  if (!id || !(/^[0-9]+$/.test(id))) {
    res.status(400).send({ error: 'Bad Request' });
  } else {
    editCaptain({ ...captainInfo }, id)
      .then(({ rows: captain }) => {
        if (!captain[0]) {
          res.status(404).send({
            error: 'captain dose not edit',
          });
        } else {
          res.status(202).send({
            result: 'true',
          });
        }
      })
      .catch(() => res.status(500).send({ error: 'sorry we have some issues' }));
  }
};
