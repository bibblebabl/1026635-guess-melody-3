import React from 'react';
import renderer from 'react-test-renderer';
import QuestionGenre from './question-genre';


export const question =
  {
    question: `Вопрос`,
    answers: [
      {
        id: 1,
        value: `трек-1`,
        url: `http://dssdsd.ru`
      },
      {
        id: 2,
        value: `трек-2`,
        url: `http://dssdsd.ru`
      },
      {
        id: 3,
        value: `трек-3`,
        url: `http://dssdsd.ru`
      },
      {
        id: 4,
        value: `трек-4`,
        url: `http://dssdsd.ru`
      },
    ]
  };

it(`<QuestionGenre /> renders correctly`, () => {
  const component = renderer.create(
      <QuestionGenre question={question} />
  ).toJSON();

  expect(component).toMatchSnapshot();
});
