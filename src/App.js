import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { VanillaForm } from './VanillaForm';
import { FormikForm } from './Formik';
import { Header } from './Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="forms">
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
    </div>
  );
}

export default App;
