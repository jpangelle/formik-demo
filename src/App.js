import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import './App.css';
import { VanillaForm } from './VanillaForm';
import { FormikForm } from './Formik';

function App() {
  return (
    <div className="App">
      <Card>
        <CardContent>
          <VanillaForm />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <FormikForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
