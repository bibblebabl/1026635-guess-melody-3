import React from 'react';
import renderer from 'react-test-renderer';
import QuestionGenre from './question-genre';

import {question} from './mock';

it(`<QuestionGenre /> renders correctly`, () => {
  const component = renderer.create(
      <QuestionGenre onAnswer={() => {}} question={question} />
  ).toJSON();

  expect(component).toMatchSnapshot();
});
