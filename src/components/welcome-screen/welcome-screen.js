import React from 'react';
import PropTypes from 'prop-types';

const WelcomeScreen = ({errors, onWelcomeButtonClick}) => {
  return (
    <section className="welcome">
      <div className="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width={186} height={83} /></div>
      <button className="welcome__button" onClick={onWelcomeButtonClick}><span className="visually-hidden">Начать игру</span></button>
      {errors}
      <h2 className="welcome__rules-title">Правила игры</h2>
      <p className="welcome__text">Правила просты:</p>
      <ul className="welcome__rules-list">
        <li>Нужно ответить на&nbsp;все вопросы.</li>
        <li>Можно допустить 3 ошибки.</li>
      </ul>
      <p className="welcome__text">Удачи!</p>
    </section>
  );
};

WelcomeScreen.propTypes = {
  errors: PropTypes.string,
  onWelcomeButtonClick: PropTypes.func
};

export default WelcomeScreen;

