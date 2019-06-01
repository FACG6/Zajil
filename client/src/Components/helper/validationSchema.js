const yup = require('yup');

// eslint-disable-next-line import/no-mutable-exports
let captainSchema = yup.object().shape({
  name: yup
    .string()
    .required()
  ,
  phone: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('A phone number is required'),
  IDNumber: yup
    .number()
    .typeError("That doesn't look like a ID number")
    .integer("ID number can't include a decimal point")
    .min(9)
    .required('ID number is required'),
  status: yup
    .boolean()
    .required(),
  email: yup
    .string()
    .required()
    .email(),
  address: yup
    .string()
    .required(),
  licenceNumber: yup
    .number()
    .typeError("That doesn't look like a licenceNumber number")
    .integer("licenceNumber number can't include a decimal point")
    .required('licenceNumber number is required'),
});

// eslint-disable-next-line import/prefer-default-export
export { captainSchema };
