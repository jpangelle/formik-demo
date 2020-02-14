import React, { useState } from 'react';
import {
  Button,
  CardHeader,
  CircularProgress,
  TextField,
} from '@material-ui/core';
import { EMAIL_REG_EX, PHONE_NUMBER_REG_EX } from './constants';

export const VanillaForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  };

  const [firstName, setFirstName] = useState(initialValues.firstName);
  const [lastName, setLastName] = useState(initialValues.lastName);
  const [phoneNumber, setPhoneNumber] = useState(initialValues.phoneNumber);
  const [email, setEmail] = useState(initialValues.email);

  const [firstNameTouched, setFirstNameTouched] = useState(false);
  const [lastNameTouched, setLastNameTouched] = useState(false);
  const [phoneNumberTouched, setPhoneNumberTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const [firstNameValid, setFirstNameValid] = useState();
  const [lastNameValid, setLastNameValid] = useState();
  const [phoneNumberValid, setPhoneNumberValid] = useState();
  const [emailValid, setEmailValid] = useState();

  const [isSubmitting, setSubmitting] = useState(false);
  const [isRegistered, setRegistered] = useState(false);

  const validateFirstName = value => {
    if (value) {
      setFirstNameValid(true);
    } else {
      setFirstNameValid(false);
    }
  };

  const validateLastName = value => {
    if (value) {
      setLastNameValid(true);
    } else {
      setLastNameValid(false);
    }
  };

  const validatePhoneNumber = value => {
    if (PHONE_NUMBER_REG_EX.test(value)) {
      setPhoneNumberValid(true);
    } else {
      setPhoneNumberValid(false);
    }
  };

  const validateEmail = value => {
    if (EMAIL_REG_EX.test(value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handleRegisterSubmit = async () => {
    setSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setPhoneNumber(initialValues.phoneNumber);
    setEmail(initialValues.email);
    setSubmitting(false);
    setRegistered(true);
  };

  if (isRegistered) {
    return (
      <>
        <div className="header">
          <img alt="vanilla ice cream" src="https://i.imgur.com/jgy3Z6j.png" />
          <CardHeader title="Registered!" />
        </div>
        <Button
          color="primary"
          onClick={() => setRegistered(false)}
          variant="contained"
        >
          Reset Form
        </Button>
      </>
    );
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        handleRegisterSubmit();
      }}
    >
      <div className="header">
        <img alt="vanilla ice cream" src="https://i.imgur.com/jgy3Z6j.png" />
        <CardHeader title="Register with Vanilla Form" />
      </div>
      <div>
        <TextField
          error={firstNameValid === false && firstNameTouched}
          id="first-name"
          label="First Name"
          onBlur={() => {
            setFirstNameTouched(true);
            validateFirstName(firstName);
          }}
          onChange={event => {
            const { value } = event.target;
            setFirstNameValid();
            setFirstName(value);
            validateFirstName(value);
          }}
          required
          value={firstName}
        />
      </div>
      <div>
        <TextField
          error={lastNameValid === false && lastNameTouched}
          id="last-name"
          label="Last Name"
          onBlur={() => {
            setLastNameTouched(true);
            validateLastName(lastName);
          }}
          onChange={event => {
            const { value } = event.target;
            setLastNameValid();
            setLastName(value);
            validateLastName(value);
          }}
          required
          value={lastName}
        />
      </div>
      <div>
        <TextField
          error={phoneNumberValid === false && phoneNumberTouched}
          id="phone-number"
          label="Phone Number"
          onBlur={() => {
            setPhoneNumberTouched(true);
            validatePhoneNumber(phoneNumber);
          }}
          onChange={event => {
            const { value } = event.target;
            setPhoneNumberValid();
            setPhoneNumber(value);
            validatePhoneNumber(value);
          }}
          required
          value={phoneNumber}
        />
      </div>
      <div>
        <TextField
          error={emailValid === false && emailTouched}
          id="email"
          label="Email"
          onBlur={() => {
            setEmailTouched(true);
            validateEmail(email);
          }}
          onChange={event => {
            const { value } = event.target;
            setEmailValid();
            setEmail(value);
            validateEmail(value);
          }}
          required
          value={email}
        />
      </div>
      <Button
        color="primary"
        disabled={
          !firstNameValid ||
          !lastNameValid ||
          !phoneNumberValid ||
          !emailValid ||
          isSubmitting
        }
        type="submit"
        variant="contained"
      >
        {isSubmitting ? (
          <>
            <CircularProgress size={14} />
            <span className="submitting">Submitting...</span>
          </>
        ) : (
          'Submit'
        )}
      </Button>
    </form>
  );
};
