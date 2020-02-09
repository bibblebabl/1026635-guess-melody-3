import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen';

const App = () => {
  const handleWelcomeButtonClick = () => {};

  return (
    <WelcomeScreen onWelcomeButtonClick={handleWelcomeButtonClick} errors="Какая-та ошибка" />
  );
};

export default App;
