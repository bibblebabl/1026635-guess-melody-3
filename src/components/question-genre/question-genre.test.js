import React from 'react';
import renderer from 'react-test-renderer';
import QuestionGenre from './question-genre';

it(`<QuestionGenre /> renders correctly`, () => {
  const component = renderer.create(
      <QuestionGenre />
  ).toJSON();

  expect(component).toMatchSnapshot();
});
