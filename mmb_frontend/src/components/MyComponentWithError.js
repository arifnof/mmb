import React from 'react';

const MyComponentWithError = () => {
  // Simulate an error by accessing an undefined variable
  const undefinedVariable = someUndefinedVariable;
  return <div>This component might throw an error.</div>;
};

export default MyComponentWithError;