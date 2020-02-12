import React from 'react';
import renderer from 'react-test-renderer';
import QuestionArtist from './question-artist';

it(`<QuestionArtist /> renders correctly`, () => {
  const component = renderer.create(
      <QuestionArtist />
  ).toJSON();

  expect(component).toMatchSnapshot();
});
