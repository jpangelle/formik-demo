import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
  Button,
  CardHeader,
  CircularProgress,
  TextField,
} from '@material-ui/core';
import { registerSchema } from './schemas';

export const FormikForm = () => {
  const [isRegistered, setRegistered] = useState(false);

  const {
    dirty,
    errors,
    isValid,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    isSubmitting,
    setSubmitting,
    touched,
    values,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
    },
    onSubmit: () => handleRegisterSubmit(),
    validationSchema: registerSchema,
  });

  const handleRegisterSubmit = async () => {
    setSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    handleReset();
    setSubmitting(false);
    setRegistered(true);
  };

  if (isRegistered) {
    return (
      <>
        <div className="header">
          <img alt="formik logo" src="https://i.imgur.com/Pua2PZX.png" />
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
    <form onSubmit={handleSubmit}>
      <div className="header">
        <img alt="formik logo" src="https://i.imgur.com/Pua2PZX.png" />
        <CardHeader title="Register with Formik" />
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
          label="Last Name"
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
          label="Phone Number"
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
