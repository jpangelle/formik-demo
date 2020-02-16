import * as yup from 'yup';
import { PHONE_NUMBER_REG_EX } from './constants';

export const registerSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(49, 'First name must be less than 50 characters')
    .required('First name is required'),
  lastName: yup
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(49, 'Last name must be less than 50 characters')
    .required('Last name is required'),
  phoneNumber: yup
    .string()
    .matches(PHONE_NUMBER_REG_EX, 'Invalid phone number')
    .required('Phone number is required'),
  email: yup
    .string()
    .max(74, 'Email address must be less than 75 characters')
    .email('Invalid email address')
    .required('Email address is required'),
});
