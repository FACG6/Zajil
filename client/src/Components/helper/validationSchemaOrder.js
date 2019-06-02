const yup = require('yup');

// eslint-disable-next-line import/no-mutable-exports
let orderSchema = yup.object().shape({
  username: yup
    .string()
    .required()
  ,
  phone: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('A phone number is required'),
  address: yup
    .string()
    .required(),
  captenName: yup
  .string()
  .required(),
  market: yup
    .string()
    .required(),
  addItem: yup
  .string()
  .required(),
});

// eslint-disable-next-line import/prefer-default-export
export { orderSchema };