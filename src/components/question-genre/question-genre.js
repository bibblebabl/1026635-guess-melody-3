import React from 'react';
import PropTypes from 'prop-types';

const QuestionGenre = ({
  question,
  onAnswer
}) => {
  return (
    <section className="game game--genre">
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
        <form className="game__tracks">
          {
            question.answers.map((answer) => {
              return (
                <div key={answer.id} className="track">
                  <button className="track__button track__button--play" type="button" />
                  <div className="track__status">
                    <audio />
                  </div>
                  <div className="game__answer">
                    <input className="game__input visually-hidden" type="checkbox" name={question.question} defaultValue={answer.value} id={answer.id} />
                    <label className="game__check" htmlFor={answer.id}>Отметить</label>
                  </div>
                </div>
              );
            })
          }
          <button className="game__submit button" type="submit" onClick={(event) => {
            event.preventDefault();
            onAnswer(null);
          }}>Ответить</button>
        </form>
      </section>
    </section>
  );
};

QuestionGenre.propTypes = {
  onAnswer: PropTypes.func,
  question: PropTypes.shape({
    question: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      id: PropTypes.number,
      value: PropTypes.string,
      url: PropTypes.string,
    }))
  })
};

export default QuestionGenre;

