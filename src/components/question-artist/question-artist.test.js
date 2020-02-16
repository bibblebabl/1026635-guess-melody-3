import React from 'react';
import renderer from 'react-test-renderer';
import QuestionArtist from './question-artist';

const question =
  {
    type: `artist`,
    question: `Вопрос?`,
    answers: [
      {
        id: 1,
        label: `Ответ-1`,
        value: `Ответ-1`,
        url: `http://placehold.it/134x134`
      },
      {
        id: 2,
        label: `Ответ-2`,
        value: `Ответ-2`,
        url: `http://placehold.it/134x134`
      },
      {
        id: 446,
        label: `Ответ-3`,
        value: `Ответ-3`,
        url: `http://placehold.it/134x134`
      },
    ]
  };


it(`<QuestionArtist /> renders correctly`, () => {
  const component = renderer.create(
      <QuestionArtist onAnswer={() => {}} question={question} />
  ).toJSON();

  expect(component).toMatchSnapshot();
});
