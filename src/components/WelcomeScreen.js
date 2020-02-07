import React from 'react';
import PropTypes from 'prop-types';

const WelcomeScreen = ({errors}) => {
  return (
    <div>{errors}</div>
  );
};

WelcomeScreen.propTypes = {
  errors: PropTypes.string
};

export default WelcomeScreen;

