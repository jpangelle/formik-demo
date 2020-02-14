import * as yup from 'yup';
import { PHONE_NUMBER_REG_EX } from './constants';

export const registerSchema = yup.object().shape({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Required'),
  phoneNumber: yup
    .string()
    .matches(PHONE_NUMBER_REG_EX, 'Invalid phone number')
    .required(),
});
