const yup = require('yup');

// eslint-disable-next-line import/prefer-default-export
export const loginValidation = yup.object().shape({

  userName: yup
    .string()
    .min(5)
    .max(50),
  password: yup
    .string()
    .min(3)
    .max(20),
});
