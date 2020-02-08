import React from 'react';
import PropTypes from 'prop-types';

const WelcomeScreen = ({errors, onWelcomeButtonClick}) => {
  return (
    <div className="welcome">
      {errors}
      <button onClick={onWelcomeButtonClick} className="button welcome__button">Start Game</button>
    </div>

  );
};

WelcomeScreen.propTypes = {
  errors: PropTypes.string,
  onWelcomeButtonClick: PropTypes.func
};

export default WelcomeScreen;

