import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Button, CircularProgress, TextField } from '@material-ui/core';
import { registerSchema } from './schemas';

export const FormikForm = () => {
  const [isRegistered, setRegistered] = useState(false);

  const {
    dirty,
    errors,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    setSubmitting,
    touched,
    values
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: ''
    },
    onSubmit: () => handleRegisterSubmit(),
    validationSchema: registerSchema
  });

  const handleRegisterSubmit = async () => {
    setSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSubmitting(false);
    setRegistered(true);
  };

  if (isRegistered) {
    return (
      <>
        <h2>Registered</h2>
        <Button
          color="primary"
          onClick={() => setRegistered(false)}
          variant="contained"
        >
          Reregister
        </Button>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="header">
        <img alt="vanilla ice cream" src="https://i.imgur.com/70wP7Gs.png" />
        <h2>Register via Formik</h2>
      </div>
      <div>
        <TextField
          error={errors.firstName && touched.firstName}
          id="first-name"
          label="First Name"
          name="firstName"
          onBlur={handleBlur}
          onChange={handleChange}
          required
          value={values.firstName}
        />
      </div>
      <div>
        <TextField
          error={errors.lastName && touched.lastName}
          id="last-name"
          label="Last name"
          name="lastName"
          onBlur={handleBlur}
          onChange={handleChange}
          required
          value={values.lastName}
        />
      </div>
      <div>
        <TextField
          error={errors.phoneNumber && touched.phoneNumber}
          id="phone-number"
          label="Phone number"
          name="phoneNumber"
          onBlur={handleBlur}
          onChange={handleChange}
          required
          value={values.phoneNumber}
        />
      </div>
      <div>
        <TextField
          error={errors.email && touched.email}
          id="email"
          label="Email"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          required
          value={values.email}
        />
      </div>
      <Button
        type="submit"
        disabled={!isValid || !dirty || isSubmitting}
        variant="contained"
        color="primary"
      >
        {isSubmitting && <CircularProgress />}
        Submit
      </Button>
    </form>
  );
};
