import * as yup from 'yup';
import { PHONE_NUMBER_REG_EX } from './constants';

export const registerSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2)
    .max(50)
    .required('Required'),
  lastName: yup
    .string()
    .min(2)
    .max(50)
    .required('Required'),
  phoneNumber: yup
    .string()
    .matches(PHONE_NUMBER_REG_EX, 'Invalid phone number')
    .required(),
  email: yup
    .string()
    .max(75)
    .email('Invalid email address')
    .required('Required'),
});
