import axios from 'axios';

export default () => new Promise((resolve, reject) => {
  axios
    .get('/api/v1/checkLogin')
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
});
