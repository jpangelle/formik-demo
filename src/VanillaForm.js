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

  const [firstNameError, setFirstNameError] = useState();
  const [lastNameError, setLastNameError] = useState();
  const [phoneNumberError, setPhoneNumberError] = useState();
  const [emailError, setEmailError] = useState();

  const [isSubmitting, setSubmitting] = useState(false);
  const [isRegistered, setRegistered] = useState(false);

  const [isFormValid, setFormIsValid] = useState(false);

  const validateFirstName = value => {
    if (!value) {
      setFirstNameError('First name is required');
    } else if (value.length < 2) {
      setFirstNameError('First name must be at least 2 characters');
    } else if (value.length >= 50) {
      setFirstNameError('First name must be less than 50 characters');
    } else {
      setFirstNameError(false);
    }
  };

  const validateLastName = value => {
    if (!value) {
      setLastNameError('Last name is required');
    } else if (value.length < 2) {
      setLastNameError('Last name must be at least 2 characters');
    } else if (value.length >= 50) {
      setLastNameError('Last name must be less than 50 characters');
    } else {
      setLastNameError(false);
    }
  };

  const validatePhoneNumber = value => {
    if (!value) {
      setPhoneNumberError('Phone number is required');
    } else if (!PHONE_NUMBER_REG_EX.test(value)) {
      setPhoneNumberError('Invalid phone number');
    } else {
      setPhoneNumberError(false);
    }
  };

  const validateEmail = value => {
    if (!value) {
      setEmailError('Email address is required');
    } else if (!EMAIL_REG_EX.test(value)) {
      setEmailError('Invalid email address');
    } else if (value.length >= 75) {
      setEmailError('Email address must be less than 75 characters');
    } else {
      setEmailError(false);
    }
  };

  const validateForm = () => {
    if (
      !firstNameError &&
      firstNameError !== undefined &&
      !lastNameError &&
      lastNameError !== undefined &&
      !phoneNumberError &&
      phoneNumberError !== undefined &&
      !emailError &&
      emailError !== undefined
    ) {
      setFormIsValid(true);
    } else {
      validateFirstName(firstName);
      validateLastName(lastName);
      validatePhoneNumber(phoneNumber);
      validateEmail(email);
      setFormIsValid(false);
    }
  };

  const handleRegisterSubmit = async () => {
    setSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setPhoneNumber(initialValues.phoneNumber);
    setEmail(initialValues.email);

    setFirstNameTouched(false);
    setLastNameTouched(false);
    setPhoneNumberTouched(false);
    setEmailTouched(false);

    setFirstNameError();
    setLastNameError();
    setPhoneNumberError();
    setEmailError();

    setSubmitting(false);
    setRegistered(true);
  };

  if (isRegistered) {
    return (
      <>
        <div className="card-header">
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
        if (isFormValid) {
          handleRegisterSubmit();
        }
      }}
    >
      <div className="card-header">
        <img alt="vanilla ice cream" src="https://i.imgur.com/jgy3Z6j.png" />
        <CardHeader title="Register with Vanilla Form" />
      </div>
      <div>
        <TextField
          error={firstNameError && firstNameTouched}
          fullWidth
          helperText={firstNameTouched && firstNameError}
          id="first-name"
          label="First Name"
          onBlur={() => {
            setFirstNameTouched(true);
            validateFirstName(firstName);
          }}
          onChange={event => {
            const { value } = event.target;
            setFirstNameError();
            setFirstName(value);
            validateFirstName(value);
          }}
          onInvalid={event => {
            event.preventDefault();
          }}
          required
          value={firstName}
        />
      </div>
      <div>
        <TextField
          error={lastNameError && lastNameTouched}
          fullWidth
          helperText={lastNameTouched && lastNameError}
          id="last-name"
          label="Last Name"
          onBlur={() => {
            setLastNameTouched(true);
            validateLastName(lastName);
          }}
          onChange={event => {
            const { value } = event.target;
            setLastNameError();
            setLastName(value);
            validateLastName(value);
          }}
          onInvalid={event => {
            event.preventDefault();
          }}
          required
          value={lastName}
        />
      </div>
      <div>
        <TextField
          error={phoneNumberError && phoneNumberTouched}
          fullWidth
          helperText={phoneNumberTouched && phoneNumberError}
          id="phone-number"
          label="Phone Number"
          onBlur={() => {
            setPhoneNumberTouched(true);
            validatePhoneNumber(phoneNumber);
          }}
          onChange={event => {
            const { value } = event.target;
            setPhoneNumberError();
            setPhoneNumber(value);
            validatePhoneNumber(value);
          }}
          onInvalid={event => {
            event.preventDefault();
          }}
          required
          value={phoneNumber}
        />
      </div>
      <div>
        <TextField
          error={emailError && emailTouched}
          fullWidth
          helperText={emailTouched && emailError}
          id="email"
          label="Email"
          onBlur={() => {
            setEmailTouched(true);
            validateEmail(email);
          }}
          onChange={event => {
            const { value } = event.target;
            setEmailError();
            setEmail(value);
            validateEmail(value);
          }}
          onInvalid={event => {
            event.preventDefault();
          }}
          required
          value={email}
        />
      </div>
      <Button
        color="primary"
        disabled={isSubmitting}
        onClick={() => {
          setFirstNameTouched(true);
          setLastNameTouched(true);
          setPhoneNumberTouched(true);
          setEmailTouched(true);
          validateForm();
        }}
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
