import React from 'react';
import PropTypes from 'prop-types';

import {GameType} from '../../const';

const QuestionArtist = ({
  question,
  onAnswer
}) => {

  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx={390} cy={390} r={370} style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
        </svg>
        <div className="game__mistakes">
          <div className="wrong" />
          <div className="wrong" />
          <div className="wrong" />
        </div>
      </header>
      <section className="game__screen">
        <h2 className="game__title">{question.question}</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button" />
            <div className="track__status">
              <audio />
            </div>
          </div>
        </div>
        <form className="game__artist">
          {
            question.answers.map((answer) => {
              return (
                <div key={answer.id} className="artist">
                  <input className="artist__input visually-hidden" type="radio" name={question.question} defaultValue={answer.value} id={answer.id}
                    onChange={(event) => {
                      event.preventDefault();
                      onAnswer(question, answer);
                    }}
                  />
                  <label className="artist__name" htmlFor={answer.id}>
                    <img className="artist__picture" src={answer.url} alt={answer.label} />
                    {answer.label}
                  </label>
                </div>
              );
            })
          }
        </form>
      </section>
    </section>
  );
};

QuestionArtist.propTypes = {
  onAnswer: PropTypes.func,
  question: PropTypes.shape({
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
    question: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      value: PropTypes.string,
      url: PropTypes.string,
    }))
  }),
};

export default QuestionArtist;
