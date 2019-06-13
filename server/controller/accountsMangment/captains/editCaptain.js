// const path = require('path');
// const { hash } = require('bcryptjs');

// const { editCaptain } = require('../../../database/queries/captain/editCaptain');

// exports.updateCaptain = (req, res) => {
//   const {
//     name,
//     email,
//     phone,
//     address,
//     IDNumber,
//     licenceNumber,
//     status,
//     password,
//   } = req.body;
//   const { file } = req.files;

//   const { id } = req.params;

//   const extName = path.extname(file.name).slice(1);
//   const newName = `${new Date().getTime()}id_photo.${extName}`;
//   const captainInfo = {
//     name,
//     email,
//     phone,
//     address,
//     IDNumber,
//     licenceNumber,
//     status,
//     newName,
//     password,
//   };
//   if (!id || !(/^[0-9]+$/.test(id))) {
//     res.status(400).send({ error: 'Bad Request' });
//   } else {
//     if (['png', 'jpg', 'jpeg'].some(ext => ext === extName)) {

//       req.files.file.mv(path.join(__dirname, '..', '..', '..', 'upload', `${newName}`), (err) => {
//         if (err) res.status(500).send({ error: 'Internal Server Error' });
//         else {
//           editCaptain({ ...captainInfo }, id)
//             .then(({ rows: captain }) => {
//               if (!captain[0]) {
//                 res.status(404).send({
//                   error: 'captain dose not edit',
//                 });
//               } else {
//                 res.status(202).send({
//                   result: 'true',
//                 });
//               }
//             })
//             .catch(() => res.status(500).send({ error: 'sorry we have some issues' }));
//         }

//       }
//     }
//   }
// };
const path = require('path');
const { hash } = require('bcryptjs');


const { insertCaptain } = require('../../../database/queries/captain/addCaptain');

const addCaptain = (req, res) => {
  const { file } = req.files;
  const {
    name, email, phone, address, IDNumber, licenceNumber, status, password,
  } = req.body;
  const extName = path.extname(file.name).slice(1);
  const newName = `${new Date().getTime()}id_photo.${extName}`;
  if (['png', 'jpg', 'jpeg'].some(ext => ext === extName)) {
    req.files.file.mv(path.join(__dirname, '..', '..', '..', 'upload', `${newName}`), (err) => {
      if (err) res.status(500).send({ error: 'Internal Server Error' });
      else {
        hash(password, 5, (error, pass) => {
          if (error) res.status(500).send({ error: 'Internal Server Error' });
          else {
            insertCaptain([name, email, phone, address, IDNumber, licenceNumber, status, newName, 1, pass])
              .then((response) => {
                res.send({ result: response.rows });
              })
              .catch(() => {
                res.status(500).send({ error: 'Internal Server Error' });
              });
          }
        });
      }
    });
  } else {
    res.status(400).send({ error: 'Bad Request' });
  }
};

module.exports = { addCaptain };
