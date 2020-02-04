import React from 'react';

// eslint-disable-next-line react/prop-types
const WelcomeScreen = ({errors = `no errors`}) => {
  return (
    <div>{errors}</div>
  );
};

export default WelcomeScreen;

